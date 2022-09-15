import Todo from "./todo.js";
import Builder from "./builder.js";
import { compareAsc, format } from "date-fns";

export default class Project {
  constructor(id, name) {
    this.todos = [];
    this.id = id;
    this.name = name;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  createTodo(name, dueDate, description, starred) {
    const todo = new Todo(name, dueDate, description, starred, this);

    this.todos.push(todo);
    this.sortTodosByDate();
    this.loadTodos();
  }

  sortTodosByDate() {
    this.todos = this.todos.sort((a, b) => {
      return a.dueDate - b.dueDate;
    });
  }

  deleteTodo(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] == todo) {
        this.todos.splice(i, 1);
      }
    }
  }

  deleteTodos() {
    todoAmount = this.todos.length;
    for (let i = 0; i < todoAmount; i++) {
      delete this.todos[i];
    }
  }

  loadTodos() {
    Builder.destroyTodos();
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].buildSelf();
    }
  }
}
