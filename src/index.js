import "./initial.css";
import "./main.css";
import "./header.css";

// <header>
// <div id="burger-icon">=</div>
// <div id="add-todo">+</div>
// <div id="settings">x</div>
// </header>
// <div id="main">
// <div id="project-content">
//   <input
//     type="text"
//     name="New project name"
//     id="new-project"
//     placeholder="New project name"
//   />
//   <div id="add-project">+</div>
//   <div id="project-list">
//     <div class="project">
//       <div class="project-name">Aaa</div>
//       <div class="project-rename">R</div>
//       <div class="project-delete">X</div>
//     </div>
//   </div>
// </div>
// <div id="todo-content">
//   <div class="todo">
//     <div class="todo-name">Name</div>
//     <div class="todo-rename">R</div>
//     <div class="todo-delete">X</div>
//     <div class="todo-due-date">12/12/2020</div>
//     <div class="todo-edit">Edit</div>
//     <div class="todo-description">Description</div>
//     <div class="todo-star">*</div>
//   </div>
// </div>
// </div>

class Builder {
  constructor() {
    this.content = document.getElementById("content");
  }

  static buildHeader() {
    const header = document.createElement("header");
    const burgerIcon = document.createElement("div");
    const addTodo = document.createElement("div");
    const settings = document.createElement("div");

    burgerIcon.id = "burger-icon";
    addTodo.id = "add-todo";
    settings.id = "settings";

    header.append(burgerIcon, addTodo, settings);
    content.appendChild(header);
  }

  static buildMain() {
    this.main = document.createElement("div");
    this.main.id = "main";
    content.appendChild(this.main);
  }

  static buildProjectList() {
    const projectContent = document.createElement("div");
    const newProjectText = document.createElement("input");
    const addProject = document.createElement("div");
    this.projectList = document.createElement("div");

    projectContent.id = "project-content";
    newProjectText.id = "new-project";
    addProject.id = "add-project";
    this.projectList.id = "project-list";

    projectContent.append(newProjectText, addProject, this.projectList);
    main.appendChild(projectContent);
  }

  static buildProject(name) {
    const project = document.createElement("div");
    const projectName = document.createElement("div");
    const projectRename = document.createElement("div");
    const projectDelete = document.createElement("div");

    project.classList = "project";
    projectName.classList = "project-name";
    projectRename.classList = "project-rename";
    projectDelete.classList = "project-delete";

    projectName.innerText = name;
    projectRename.innerText = "R";
    projectDelete.innerText = "X";

    project.append(projectName, projectRename, projectDelete);
    this.projectList.appendChild(project);
  }
}

Builder.buildHeader();
Builder.buildMain();
Builder.buildProjectList();
Builder.buildProject("projectname");
