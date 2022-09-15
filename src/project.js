import Todo from "./todo.js";
import Builder from "./builder.js";
import { compareAsc, format } from "date-fns";

export default class Project {
  constructor(id, name) {
    this.todoCount = 0;
    this.todos = {};
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
    const todoId = this.todoCount;
    const todo = new Todo(todoId, name, dueDate, description, starred, this);

    this.todos[todoId] = todo;
    this.todoCount++;
    // this.sortTodosByDate();
  }

  // sortTodosByDate() {
  //   const sorted = Object.values(this.todos).sort((a, b) => {
  //     return a.dueDate - b.dueDate;
  //   });
  //   console.log(sorted);
  // }

  deleteTodo(todoId) {
    delete this.todos[todoId];
  }

  deleteTodos() {
    todoAmount = Object.keys(this.todos).length;
    for (let i = 0; i < todoAmount; i++) {
      delete this.todos[i];
    }
  }

  loadTodos() {
    Builder.destroyTodos();
    const todosArray = Object.keys(this.todos);
    for (let i = 0; i < todosArray.length; i++) {
      this.todos[todosArray[i]].buildSelf();
    }
  }
}
