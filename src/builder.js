import EmptyStar from "./assets/star.svg";
import FullStar from "./assets/star-full.svg";
import EmptyPencil from "./assets/pencil.svg";
import FullPencil from "./assets/pencil-f.svg";
import EmptyTrash from "./assets/trash.svg";
import FullTrash from "./assets/trash-f.svg";
import EmptyCog from "./assets/cog.svg";
import FullCog from "./assets/cog-f.svg";
import Menu from "./assets/menu.svg";
import EmptyPlusCircle from "./assets/plus-circle.svg";
import FullPlusCircle from "./assets/plus-circle-f.svg";
import EmptyPlusRectangle from "./assets/plus-rectangle.svg";
import FullPlusRectangle from "./assets/plus-rectangle-f.svg";

export default class Builder {
  constructor() {}

  static buildContent() {
    this.content = document.createElement("div");
    this.content.id = "content";
    const body = document.querySelector("body");
    body.appendChild(this.content);
  }

  static buildHeader() {
    const header = document.createElement("header");
    const burgerIcon = document.createElement("div");
    const addTodo = document.createElement("div");
    const settings = document.createElement("div");

    const menuIcon = new Image();
    const settingsIcon = new Image();
    const plusIcon = new Image();

    menuIcon.src = Menu;
    settingsIcon.src = EmptyCog;
    plusIcon.src = EmptyPlusCircle;

    burgerIcon.id = "burger-icon";
    addTodo.id = "add-todo";
    settings.id = "settings";

    burgerIcon.appendChild(menuIcon);
    addTodo.appendChild(plusIcon);
    settings.appendChild(settingsIcon);

    header.append(burgerIcon, addTodo, settings);
    this.content.appendChild(header);

    return addTodo;
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

    const plusIcon = new Image();
    plusIcon.src = EmptyPlusCircle;

    addProject.appendChild(plusIcon);

    projectContent.id = "project-content";
    newProjectText.id = "new-project";
    addProject.id = "add-project";
    this.projectList.id = "project-list";

    projectContent.append(newProjectText, addProject, this.projectList);
    this.main.appendChild(projectContent);

    return addProject;
  }

  static buildProject(name) {
    const project = document.createElement("div");
    const projectName = document.createElement("div");
    const projectRename = document.createElement("div");
    const projectDelete = document.createElement("div");

    projectName.classList = "project-name";
    projectRename.classList = "project-rename";
    projectDelete.classList = "project-delete";

    const editIcon = new Image();
    const trashIcon = new Image();

    editIcon.src = EmptyPencil;
    trashIcon.src = EmptyTrash;

    projectName.innerText = name;
    projectRename.appendChild(editIcon);
    projectDelete.appendChild(trashIcon);

    Builder.toggleProjectSelected(project);
    project.append(projectName, projectRename, projectDelete);
    this.projectList.appendChild(project);

    return { projectRename, projectDelete, projectName };
  }

  static toggleProjectSelected(project = this.projectList.firstChild) {
    const projects = this.projectList.childNodes;
    if (project == null) {
      return;
    }
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList = "project";
    }
    project.classList = "project selected";
  }

  static buildTodoContent() {
    this.todoContent = document.createElement("div");
    this.todoContent.id = "todo-content";

    this.main.appendChild(this.todoContent);
  }

  static buildTodo(name, dueDate, description, starred) {
    const todo = document.createElement("div");
    const todoName = document.createElement("div");
    const todoRename = document.createElement("div");
    const todoDelete = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const todoEdit = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoStar = document.createElement("div");

    todo.classList = "todo";
    todoName.classList = "todo-name";
    todoRename.classList = "todo-rename";
    todoDelete.classList = "todo-delete";
    todoDueDate.classList = "todo-due-date";
    todoEdit.classList = "todo-edit";
    todoDescription.classList = "todo-description";
    todoStar.classList = "todo-star";

    const trashIcon = new Image();
    const editIcon = new Image();

    trashIcon.src = EmptyTrash;
    editIcon.src = EmptyPencil;

    todoName.innerText = name;
    todoRename.appendChild(editIcon);
    todoDelete.appendChild(trashIcon);
    todoDueDate.innerText = dueDate;
    todoEdit.innerText = "Edit";
    todoDescription.innerText = description;

    Builder.toggleStars(todoStar, starred);

    todo.append(
      todoName,
      todoRename,
      todoDelete,
      todoDueDate,
      todoEdit,
      todoDescription,
      todoStar
    );
    this.todoContent.appendChild(todo);

    return { todoDelete, todoStar };
  }

  static toggleStars(todoStar, starred) {
    const emptyStarIcon = new Image();
    const fullStarIcon = new Image();

    emptyStarIcon.src = EmptyStar;
    fullStarIcon.src = FullStar;

    if (todoStar.hasChildNodes() == true) {
      todoStar.removeChild(todoStar.firstChild);
    }
    if (starred == false) {
      todoStar.appendChild(emptyStarIcon);
    } else {
      todoStar.appendChild(fullStarIcon);
    }
  }

  static destroyTodos() {
    while (this.todoContent.hasChildNodes()) {
      this.todoContent.removeChild(this.todoContent.firstChild);
    }
  }
}
