import Builder from "./builder.js";

export default class Todo {
  constructor(
    id,
    name,
    dueDate = "12/12/1212",
    description = "Default description",
    starred = false,
    project
  ) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
    this.starred = starred;

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
    const buttons = Builder.buildTodo(
      this.name,
      this.dueDate,
      this.description,
      this.starred
    );

    buttons.todoDelete.addEventListener("click", () => {
      this.project.deleteTodo(this.id);
      buttons.todoDelete.parentElement.remove();
    });

    buttons.todoStar.addEventListener("click", () => {
      this.starred = this.starred == false ? true : false;
      Builder.toggleStars(buttons.todoStar, this.starred);
    });
  }
}
