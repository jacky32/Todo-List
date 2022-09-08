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
}

Builder.buildHeader();
