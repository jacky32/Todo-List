import "./initial.css";
import "./main.css";
import "./header.css";

import Builder from "./builder.js";
import Project from "./project.js";
import { parse, stringify } from "flatted";

export default class App {
  static projectCount = 0;
  static projects = {};
  static currentProject;
  constructor() {
    this.#buildAll();
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    try {
      const app = parse(window.localStorage.getItem("app"));
      const projects = app.projects;
      for (let i = 0; i < Object.keys(projects).length; i++) {
        const project = App.createProject(projects[i].name);
        for (let y = 0; y < Object.keys(projects[i].todos).length; y++) {
          const currentTodo = projects[i].todos[y];
          project.createTodo(
            currentTodo.name,
            currentTodo.dueDate,
            currentTodo.description,
            currentTodo.starred
          );
        }
      }
      App.saveProjectsToLocalStorage();
    } catch (e) {
      console.log(e);
    }
  }

  static saveProjectsToLocalStorage() {
    const app = {
      projects: this.projects,
    };
    try {
      window.localStorage.setItem("app", stringify(app));
      console.log("saved");
    } catch (e) {
      console.log(e);
    }
  }

  #buildAll() {
    Builder.buildContent();
    const headerButtons = Builder.buildHeader();
    Builder.buildMain();
    const addProjectButton = Builder.buildProjectList();
    Builder.buildTodoContent();

    headerButtons.addTodo.addEventListener("click", () => {
      if (App.currentProject == undefined) {
        return alert("No project selected");
      }
      const submitted = Builder.buildNewTodoModal();

      submitted.todoSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (!submitted.todoSubmit.parentElement.reportValidity()) {
          console.log("invalid");
        } else {
          console.log(submitted.todoNewStarInput.value);
          App.currentProject.createTodo(
            submitted.todoNewNameInput.value,
            submitted.todoNewDueDateInput.value,
            submitted.todoNewDescriptionText.value,
            submitted.todoNewStarInput.checked
          );
          submitted.todoSubmit.parentElement.parentElement.parentElement.remove();
        }
      });
    });

    headerButtons.settings.addEventListener("click", () => {
      setTimeout(window.localStorage.clear(), 400);
    });

    addProjectButton.addEventListener("click", () => {
      const newProjectText = document.getElementById("new-project");
      App.createProject(newProjectText.value);
      newProjectText.value = "";
    });

    window.addEventListener("click", () => {
      setTimeout(App.saveProjectsToLocalStorage(), 200);
    });
  }

  static createProject(name) {
    const id = this.projectCount;
    const project = new Project(id, name);
    const projectDoms = Builder.buildProject(name);
    this.projects[id] = project;
    this.currentProject = project;
    this.currentProject.loadTodos();
    this.projectCount++;

    projectDoms.projectRename.addEventListener("click", () => {
      console.log("rename");
    });

    projectDoms.projectDelete.addEventListener("click", () => {
      App.deleteProject(id);
      projectDoms.projectDelete.parentNode.remove();
      Builder.toggleProjectSelected();
    });

    projectDoms.projectName.addEventListener("click", () => {
      App.selectProject(id);
      Builder.toggleProjectSelected(projectDoms.projectName.parentElement);
    });

    return project;
  }

  static selectProject(id) {
    this.currentProject = this.projects[id];
    if (this.currentProject == undefined) {
      return;
    }
    this.currentProject.loadTodos();
  }

  static deleteProject(id) {
    delete this.projects[id];
    App.selectProject(Object.keys(this.projects)[0]);
  }

  static getFirstProject() {
    return Object.keys(this.projects)[0];
  }
}

const app = new App();
