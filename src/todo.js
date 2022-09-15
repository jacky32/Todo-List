import Builder from "./builder.js";
import { format, parseISO } from "date-fns";

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
    if (typeof dueDate == Date) {
      this.dueDate = dueDate;
    } else {
      this.dueDate = parseISO(dueDate);
    }
    this.description = description;
    this.project = project;
    this.starred = starred;

    this.buildSelf();
  }

  convertToDate(dueDate) {
    const [year, month, day] = dueDate.split("-");
    const date = new Date(+year, +month - 1, +day);
    return date;
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
      format(this.dueDate, "dd. MM. yyyy"),
      this.description,
      this.starred
    );

    buttons.todoDelete.addEventListener("click", () => {
      this.project.deleteTodo(this.id);
      buttons.todoDelete.parentElement.remove();
    });

    buttons.todoEdit.addEventListener("click", () => {
      const newValues = Builder.buildNewTodoModal(
        this.name,
        format(this.dueDate, "yyyy-MM-dd"),
        this.description,
        this.starred
      );
      newValues.todoSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (!newValues.todoSubmit.parentElement.reportValidity()) {
          console.log("invalid");
        } else {
          Builder.editTodo(buttons, newValues);
          this.name = newValues.todoNewNameInput.value;
          this.dueDate = this.convertToDate(
            newValues.todoNewDueDateInput.value
          );
          this.description = newValues.todoNewDescriptionText.value;
          this.starred = newValues.todoNewStarInput.value;
          newValues.todoSubmit.parentElement.parentElement.parentElement.remove();
        }
      });
    });

    buttons.todoStar.addEventListener("click", () => {
      this.starred = this.starred == false ? true : false;
      Builder.toggleStars(buttons.todoStar, this.starred);
    });
  }
}
