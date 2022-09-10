import Todo from "./todo.js";
import Builder from "./builder.js";

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

  createTodo(name, dueDate, description) {
    const todoId = this.todoCount;
    const todo = new Todo(todoId, name, dueDate, description, this);

    this.todos[todoId] = todo;
    this.todoCount++;
  }

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
      const deleteButton = Builder.buildTodo(
        this.todos[todosArray[i]].getId,
        this.todos[todosArray[i]].getName,
        this.todos[todosArray[i]].getDueDate,
        this.todos[todosArray[i]].getDescription,
        this
      );

      deleteButton.addEventListener("click", () => {
        this.deleteTodo(this.todos[todosArray[i]].getId);
        deleteButton.parentElement.remove();
      });
    }
  }
}
