import Builder from "./builder.js";

export default class Todo {
  constructor(
    id,
    name = "Default name",
    dueDate = "12/12/1212",
    description = "Default description",
    project
  ) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
    this.starred = false;

    this.buildSelf();
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

  get getStarred() {
    return this.starred;
  }

  buildSelf() {
    const deleteButton = Builder.buildTodo(
      this.id,
      this.name,
      this.dueDate,
      this.description,
      this.project,
      this.starred
    );

    deleteButton.addEventListener("click", () => {
      this.project.deleteTodo(this.id);
      deleteButton.parentElement.remove();
    });
  }
}
