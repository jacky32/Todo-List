import "./initial.css";
import "./main.css";
import "./header.css";

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

    burgerIcon.textContent = "E";
    addTodo.textContent = "+";
    settings.textContent = "*";

    addTodo.addEventListener("click", () => {
      App.currentProject.createTodo();
    });

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

    addProject.addEventListener("click", () => {
      App.createProject(newProjectText.value);
      newProjectText.value = "";
    });

    projectContent.append(newProjectText, addProject, this.projectList);
    this.main.appendChild(projectContent);
  }

  static buildProject(id, name) {
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

    projectRename.addEventListener("click", () => {
      console.log("rename");
    });

    projectDelete.addEventListener("click", () => {
      App.deleteProject(id);
      project.remove();
    });

    project.addEventListener("click", () => {
      App.selectProject(id);
    });

    project.append(projectName, projectRename, projectDelete);
    this.projectList.appendChild(project);
  }

  static buildTodoContent() {
    this.todoContent = document.createElement("div");
    this.todoContent.id = "todo-content";

    this.main.appendChild(this.todoContent);
  }

  static buildTodo(id, name, dueDate, description) {
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

    todoName.innerText = name;
    todoRename.innerText = "R";
    todoDelete.innerText = "X";
    todoDueDate.innerText = dueDate;
    todoEdit.innerText = "Edit";
    todoDescription.innerText = description;
    todoStar.innerText = "*";

    todoDelete.addEventListener("click", () => {
      App.currentProject.deleteTodo(id);
      todo.remove();
    });

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
  }

  static destroyTodos() {
    while (this.todoContent.hasChildNodes()) {
      this.todoContent.removeChild(this.todoContent.firstChild);
    }
  }
}

class App {
  static projectCount = 0;
  static projects = {};
  static currentProject;
  constructor() {
    this.#buildAll();
  }

  #buildAll() {
    Builder.buildHeader();
    Builder.buildMain();
    Builder.buildProjectList();
    Builder.buildTodoContent();
  }

  static createProject(name) {
    const id = this.projectCount;
    const project = new Project(id, name);
    this.projects[id] = project;
    this.currentProject = project;
    this.currentProject.loadTodos();
    this.projectCount++;
  }

  static selectProject(id) {
    this.currentProject = this.projects[id];
    this.currentProject.loadTodos();
  }

  static deleteProject(id) {
    delete this.projects[id];
  }
}

class Project {
  constructor(id, name) {
    this.todoCount = 0;
    this.todos = {};
    this.id = id;
    this.name = name;
    Builder.buildProject(this.id, this.name);
  }

  get getId() {
    return this.id;
  }

  createTodo(name, dueDate, description) {
    const todoId = this.todoCount;
    const todo = new Todo(todoId, name, dueDate, description);
    this.todos[todoId] = todo;
    this.todoCount++;
  }

  deleteTodo(todoId) {
    delete this.todos[todoId];
  }

  loadTodos() {
    Builder.destroyTodos();
    const todosArray = Object.keys(this.todos);
    for (let i = 0; i < todosArray.length; i++) {
      Builder.buildTodo(
        this.todos[todosArray[i]].getId,
        this.todos[todosArray[i]].getName,
        this.todos[todosArray[i]].getDueDate,
        this.todos[todosArray[i]].getDescription
      );
    }
  }
}

class Todo {
  constructor(
    id,
    name = "Default name",
    dueDate = "12/12/1212",
    description = "Default description"
  ) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
    Builder.buildTodo(this.id, this.name, this.dueDate, this.description);
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getDescription() {
    return this.description;
  }
}

const app = new App();
App.createProject("jmeno");
