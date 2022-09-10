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
  }

  #buildAll() {
    Builder.buildContent();
    const addTodoButton = Builder.buildHeader();
    Builder.buildMain();
    const addProjectButton = Builder.buildProjectList();
    Builder.buildTodoContent();

    addTodoButton.addEventListener("click", () => {
      App.currentProject.createTodo();
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

    // projectRename.addEventListener("click", () => {
    //   console.log("rename");
    // });

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
App.createProject("jmeno");
