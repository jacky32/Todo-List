import "./initial.css";
import "./main.css";
import "./header.css";

import Builder from "./builder.js";
import Project from "./project.js";

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
      const app = JSON.parse(window.localStorage.getItem("app"));
      const projects = app.projects;
      console.log(Object.keys(projects));
      for (let i = 0; i < Object.keys(projects).length; i++) {
        App.createProject(projects[i].name);
      }
    } catch (e) {
      console.log(e);
    }
  }

  #buildAll() {
    Builder.buildContent();
    const addTodoButton = Builder.buildHeader();
    Builder.buildMain();
    const addProjectButton = Builder.buildProjectList();
    Builder.buildTodoContent();

    addTodoButton.addEventListener("click", () => {
      const submitted = Builder.buildNewTodoModal();

      submitted.todoSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (!submitted.todoSubmit.parentElement.reportValidity()) {
          console.log("invalid");
        } else {
          App.currentProject.createTodo(
            submitted.todoNewNameInput.value,
            submitted.todoNewDueDateInput.value,
            submitted.todoNewDescriptionText.value,
            submitted.todoNewStarInput.value
          );
          submitted.todoSubmit.parentElement.parentElement.parentElement.remove();
        }
      });
    });

    addProjectButton.addEventListener("click", () => {
      const newProjectText = document.getElementById("new-project");
      App.createProject(newProjectText.value);
      newProjectText.value = "";
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

    App.saveProjectsToLocalStorage();
  }

  static selectProject(id) {
    this.currentProject = this.projects[id];
    if (this.currentProject == undefined) {
      return;
    }
    this.currentProject.loadTodos();
    App.saveProjectsToLocalStorage();
  }

  static deleteProject(id) {
    delete this.projects[id];
    App.selectProject(Object.keys(this.projects)[0]);
  }

  static saveProjectsToLocalStorage() {
    const app = {
      projectCount: this.projectCount,
      projects: this.projects,
      currentProject: this.currentProject,
    };
    try {
      window.localStorage.setItem("app", JSON.stringify(app));
    } catch (e) {
      console.log(e);
    }
    console.log(JSON.parse(window.localStorage.getItem("app")));
  }

  static getFirstProject() {
    return Object.keys(this.projects)[0];
  }
}

const app = new App();
