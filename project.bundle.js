/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Builder)
/* harmony export */ });
/* harmony import */ var _assets_star_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/star.svg */ "./src/assets/star.svg");
/* harmony import */ var _assets_star_full_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/star-full.svg */ "./src/assets/star-full.svg");
/* harmony import */ var _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pencil.svg */ "./src/assets/pencil.svg");
/* harmony import */ var _assets_pencil_f_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pencil-f.svg */ "./src/assets/pencil-f.svg");
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg");
/* harmony import */ var _assets_trash_f_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/trash-f.svg */ "./src/assets/trash-f.svg");
/* harmony import */ var _assets_cog_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/cog.svg */ "./src/assets/cog.svg");
/* harmony import */ var _assets_cog_f_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/cog-f.svg */ "./src/assets/cog-f.svg");
/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/menu.svg */ "./src/assets/menu.svg");
/* harmony import */ var _assets_plus_circle_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/plus-circle.svg */ "./src/assets/plus-circle.svg");
/* harmony import */ var _assets_plus_circle_f_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/plus-circle-f.svg */ "./src/assets/plus-circle-f.svg");
/* harmony import */ var _assets_plus_rectangle_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/plus-rectangle.svg */ "./src/assets/plus-rectangle.svg");
/* harmony import */ var _assets_plus_rectangle_f_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/plus-rectangle-f.svg */ "./src/assets/plus-rectangle-f.svg");














class Builder {
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

    menuIcon.src = _assets_menu_svg__WEBPACK_IMPORTED_MODULE_8__;
    settingsIcon.src = _assets_cog_svg__WEBPACK_IMPORTED_MODULE_6__;
    plusIcon.src = _assets_plus_circle_svg__WEBPACK_IMPORTED_MODULE_9__;

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
    plusIcon.src = _assets_plus_circle_svg__WEBPACK_IMPORTED_MODULE_9__;

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

    editIcon.src = _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashIcon.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__;

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

  static buildTodo(id, name, dueDate, description, project) {
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

    const emptyStarIcon = new Image();
    const trashIcon = new Image();
    const editIcon = new Image();

    emptyStarIcon.src = _assets_star_svg__WEBPACK_IMPORTED_MODULE_0__;
    trashIcon.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__;
    editIcon.src = _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_2__;

    todoName.innerText = name;
    todoRename.appendChild(editIcon);
    todoDelete.appendChild(trashIcon);
    todoDueDate.innerText = dueDate;
    todoEdit.innerText = "Edit";
    todoDescription.innerText = description;
    todoStar.appendChild(emptyStarIcon);

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

    return todoDelete;
  }

  static destroyTodos() {
    while (this.todoContent.hasChildNodes()) {
      this.todoContent.removeChild(this.todoContent.firstChild);
    }
  }
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder.js */ "./src/builder.js");


class Todo {
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
    const deleteButton = _builder_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildTodo(
      this.id,
      this.name,
      this.dueDate,
      this.description,
      this.project
    );

    deleteButton.addEventListener("click", () => {
      this.project.deleteTodo(this.id);
      deleteButton.parentElement.remove();
    });
    // todoDelete.addEventListener("click", () => {
    //   project.deleteTodo(id);
    //   todo.remove();
    // });
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


/***/ }),

/***/ "./src/assets/cog-f.svg":
/*!******************************!*\
  !*** ./src/assets/cog-f.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ad39fd0e0e851738497.svg";

/***/ }),

/***/ "./src/assets/cog.svg":
/*!****************************!*\
  !*** ./src/assets/cog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5280d1ab4da1868eb68d.svg";

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "487e8cfe61153780567d.svg";

/***/ }),

/***/ "./src/assets/pencil-f.svg":
/*!*********************************!*\
  !*** ./src/assets/pencil-f.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13577494b77ebbd6e9e6.svg";

/***/ }),

/***/ "./src/assets/pencil.svg":
/*!*******************************!*\
  !*** ./src/assets/pencil.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d436b1ef3b035f95c1e.svg";

/***/ }),

/***/ "./src/assets/plus-circle-f.svg":
/*!**************************************!*\
  !*** ./src/assets/plus-circle-f.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7314175589805269423.svg";

/***/ }),

/***/ "./src/assets/plus-circle.svg":
/*!************************************!*\
  !*** ./src/assets/plus-circle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b655a5fbfe62b393f963.svg";

/***/ }),

/***/ "./src/assets/plus-rectangle-f.svg":
/*!*****************************************!*\
  !*** ./src/assets/plus-rectangle-f.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b614467525d68cbddae.svg";

/***/ }),

/***/ "./src/assets/plus-rectangle.svg":
/*!***************************************!*\
  !*** ./src/assets/plus-rectangle.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d10dd8848c6e96cc140.svg";

/***/ }),

/***/ "./src/assets/star-full.svg":
/*!**********************************!*\
  !*** ./src/assets/star-full.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6439aa36cf103e4dfbcb.svg";

/***/ }),

/***/ "./src/assets/star.svg":
/*!*****************************!*\
  !*** ./src/assets/star.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36fff3147d701699368a.svg";

/***/ }),

/***/ "./src/assets/trash-f.svg":
/*!********************************!*\
  !*** ./src/assets/trash-f.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6870d6f99b9bb127a4ce.svg";

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6082e245a0e1f520fe38.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _builder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.js */ "./src/builder.js");



class Project {
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
    const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](todoId, name, dueDate, description, this);

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
    _builder_js__WEBPACK_IMPORTED_MODULE_1__["default"].destroyTodos();
    const todosArray = Object.keys(this.todos);
    for (let i = 0; i < todosArray.length; i++) {
      const deleteButton = _builder_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildTodo(
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDQTtBQUNDO0FBQ0g7QUFDQztBQUNMO0FBQ0M7QUFDSjtBQUNrQjtBQUNDO0FBQ0s7QUFDQzs7QUFFL0M7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFJO0FBQ3ZCLHVCQUF1Qiw0Q0FBUTtBQUMvQixtQkFBbUIsb0RBQWU7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvREFBZTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLCtDQUFXO0FBQzlCLG9CQUFvQiw4Q0FBVTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw2Q0FBUztBQUNqQyxvQkFBb0IsOENBQVU7QUFDOUIsbUJBQW1CLCtDQUFXOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25MbUM7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkI7QUFDTTs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQUk7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnRUFBb0I7QUFDeEI7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLDJCQUEyQiw2REFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYnVpbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcHR5U3RhciBmcm9tIFwiLi9hc3NldHMvc3Rhci5zdmdcIjtcbmltcG9ydCBGdWxsU3RhciBmcm9tIFwiLi9hc3NldHMvc3Rhci1mdWxsLnN2Z1wiO1xuaW1wb3J0IEVtcHR5UGVuY2lsIGZyb20gXCIuL2Fzc2V0cy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgRnVsbFBlbmNpbCBmcm9tIFwiLi9hc3NldHMvcGVuY2lsLWYuc3ZnXCI7XG5pbXBvcnQgRW1wdHlUcmFzaCBmcm9tIFwiLi9hc3NldHMvdHJhc2guc3ZnXCI7XG5pbXBvcnQgRnVsbFRyYXNoIGZyb20gXCIuL2Fzc2V0cy90cmFzaC1mLnN2Z1wiO1xuaW1wb3J0IEVtcHR5Q29nIGZyb20gXCIuL2Fzc2V0cy9jb2cuc3ZnXCI7XG5pbXBvcnQgRnVsbENvZyBmcm9tIFwiLi9hc3NldHMvY29nLWYuc3ZnXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9hc3NldHMvbWVudS5zdmdcIjtcbmltcG9ydCBFbXB0eVBsdXNDaXJjbGUgZnJvbSBcIi4vYXNzZXRzL3BsdXMtY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IEZ1bGxQbHVzQ2lyY2xlIGZyb20gXCIuL2Fzc2V0cy9wbHVzLWNpcmNsZS1mLnN2Z1wiO1xuaW1wb3J0IEVtcHR5UGx1c1JlY3RhbmdsZSBmcm9tIFwiLi9hc3NldHMvcGx1cy1yZWN0YW5nbGUuc3ZnXCI7XG5pbXBvcnQgRnVsbFBsdXNSZWN0YW5nbGUgZnJvbSBcIi4vYXNzZXRzL3BsdXMtcmVjdGFuZ2xlLWYuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGJ1aWxkQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBidXJnZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHNldHRpbmdzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBtZW51SWNvbi5zcmMgPSBNZW51O1xuICAgIHNldHRpbmdzSWNvbi5zcmMgPSBFbXB0eUNvZztcbiAgICBwbHVzSWNvbi5zcmMgPSBFbXB0eVBsdXNDaXJjbGU7XG5cbiAgICBidXJnZXJJY29uLmlkID0gXCJidXJnZXItaWNvblwiO1xuICAgIGFkZFRvZG8uaWQgPSBcImFkZC10b2RvXCI7XG4gICAgc2V0dGluZ3MuaWQgPSBcInNldHRpbmdzXCI7XG5cbiAgICBidXJnZXJJY29uLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICBhZGRUb2RvLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgICBzZXR0aW5ncy5hcHBlbmRDaGlsZChzZXR0aW5nc0ljb24pO1xuXG4gICAgaGVhZGVyLmFwcGVuZChidXJnZXJJY29uLCBhZGRUb2RvLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICByZXR1cm4gYWRkVG9kbztcbiAgfVxuXG4gIHN0YXRpYyBidWlsZE1haW4oKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLm1haW4uaWQgPSBcIm1haW5cIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMubWFpbik7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHBsdXNJY29uLnNyYyA9IEVtcHR5UGx1c0NpcmNsZTtcblxuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgcHJvamVjdENvbnRlbnQuaWQgPSBcInByb2plY3QtY29udGVudFwiO1xuICAgIG5ld1Byb2plY3RUZXh0LmlkID0gXCJuZXctcHJvamVjdFwiO1xuICAgIGFkZFByb2plY3QuaWQgPSBcImFkZC1wcm9qZWN0XCI7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5pZCA9IFwicHJvamVjdC1saXN0XCI7XG5cbiAgICBwcm9qZWN0Q29udGVudC5hcHBlbmQobmV3UHJvamVjdFRleHQsIGFkZFByb2plY3QsIHRoaXMucHJvamVjdExpc3QpO1xuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0UmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdCA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgcHJvamVjdFJlbmFtZS5jbGFzc0xpc3QgPSBcInByb2plY3QtcmVuYW1lXCI7XG4gICAgcHJvamVjdERlbGV0ZS5jbGFzc0xpc3QgPSBcInByb2plY3QtZGVsZXRlXCI7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHRyYXNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgZWRpdEljb24uc3JjID0gRW1wdHlQZW5jaWw7XG4gICAgdHJhc2hJY29uLnNyYyA9IEVtcHR5VHJhc2g7XG5cbiAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIHByb2plY3RSZW5hbWUuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHByb2plY3REZWxldGUuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcblxuICAgIEJ1aWxkZXIudG9nZ2xlUHJvamVjdFNlbGVjdGVkKHByb2plY3QpO1xuICAgIHByb2plY3QuYXBwZW5kKHByb2plY3ROYW1lLCBwcm9qZWN0UmVuYW1lLCBwcm9qZWN0RGVsZXRlKTtcbiAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdFJlbmFtZSwgcHJvamVjdERlbGV0ZSwgcHJvamVjdE5hbWUgfTtcbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVQcm9qZWN0U2VsZWN0ZWQocHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5wcm9qZWN0TGlzdC5jaGlsZE5vZGVzO1xuICAgIGlmIChwcm9qZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHNbaV0uY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG4gICAgfVxuICAgIHByb2plY3QuY2xhc3NMaXN0ID0gXCJwcm9qZWN0IHNlbGVjdGVkXCI7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRUb2RvQ29udGVudCgpIHtcbiAgICB0aGlzLnRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnRvZG9Db250ZW50LmlkID0gXCJ0b2RvLWNvbnRlbnRcIjtcblxuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLnRvZG9Db250ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZFRvZG8oaWQsIG5hbWUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9SZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0b2RvLmNsYXNzTGlzdCA9IFwidG9kb1wiO1xuICAgIHRvZG9OYW1lLmNsYXNzTGlzdCA9IFwidG9kby1uYW1lXCI7XG4gICAgdG9kb1JlbmFtZS5jbGFzc0xpc3QgPSBcInRvZG8tcmVuYW1lXCI7XG4gICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QgPSBcInRvZG8tZGVsZXRlXCI7XG4gICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0ID0gXCJ0b2RvLWR1ZS1kYXRlXCI7XG4gICAgdG9kb0VkaXQuY2xhc3NMaXN0ID0gXCJ0b2RvLWVkaXRcIjtcbiAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gXCJ0b2RvLWRlc2NyaXB0aW9uXCI7XG4gICAgdG9kb1N0YXIuY2xhc3NMaXN0ID0gXCJ0b2RvLXN0YXJcIjtcblxuICAgIGNvbnN0IGVtcHR5U3Rhckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCB0cmFzaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgZW1wdHlTdGFySWNvbi5zcmMgPSBFbXB0eVN0YXI7XG4gICAgdHJhc2hJY29uLnNyYyA9IEVtcHR5VHJhc2g7XG4gICAgZWRpdEljb24uc3JjID0gRW1wdHlQZW5jaWw7XG5cbiAgICB0b2RvTmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIHRvZG9SZW5hbWUuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHRvZG9EZWxldGUuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcbiAgICB0b2RvRHVlRGF0ZS5pbm5lclRleHQgPSBkdWVEYXRlO1xuICAgIHRvZG9FZGl0LmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICB0b2RvU3Rhci5hcHBlbmRDaGlsZChlbXB0eVN0YXJJY29uKTtcblxuICAgIHRvZG8uYXBwZW5kKFxuICAgICAgdG9kb05hbWUsXG4gICAgICB0b2RvUmVuYW1lLFxuICAgICAgdG9kb0RlbGV0ZSxcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb0VkaXQsXG4gICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICB0b2RvU3RhclxuICAgICk7XG4gICAgdGhpcy50b2RvQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIHJldHVybiB0b2RvRGVsZXRlO1xuICB9XG5cbiAgc3RhdGljIGRlc3Ryb3lUb2RvcygpIHtcbiAgICB3aGlsZSAodGhpcy50b2RvQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHRoaXMudG9kb0NvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy50b2RvQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCdWlsZGVyIGZyb20gXCIuL2J1aWxkZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGlkLFxuICAgIG5hbWUgPSBcIkRlZmF1bHQgbmFtZVwiLFxuICAgIGR1ZURhdGUgPSBcIjEyLzEyLzEyMTJcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiRGVmYXVsdCBkZXNjcmlwdGlvblwiLFxuICAgIHByb2plY3RcbiAgKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBCdWlsZGVyLmJ1aWxkVG9kbyhcbiAgICAgIHRoaXMuaWQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLmR1ZURhdGUsXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5wcm9qZWN0XG4gICAgKTtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9qZWN0LmRlbGV0ZVRvZG8odGhpcy5pZCk7XG4gICAgICBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICAvLyB0b2RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICBwcm9qZWN0LmRlbGV0ZVRvZG8oaWQpO1xuICAgIC8vICAgdG9kby5yZW1vdmUoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGdldCBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXQgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgQnVpbGRlciBmcm9tIFwiLi9idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgIHRoaXMudG9kb0NvdW50ID0gMDtcbiAgICB0aGlzLnRvZG9zID0ge307XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBjcmVhdGVUb2RvKG5hbWUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgdG9kb0lkID0gdGhpcy50b2RvQ291bnQ7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRvZG9JZCwgbmFtZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHRoaXMpO1xuXG4gICAgdGhpcy50b2Rvc1t0b2RvSWRdID0gdG9kbztcbiAgICB0aGlzLnRvZG9Db3VudCsrO1xuICB9XG5cbiAgZGVsZXRlVG9kbyh0b2RvSWQpIHtcbiAgICBkZWxldGUgdGhpcy50b2Rvc1t0b2RvSWRdO1xuICB9XG5cbiAgZGVsZXRlVG9kb3MoKSB7XG4gICAgdG9kb0Ftb3VudCA9IE9iamVjdC5rZXlzKHRoaXMudG9kb3MpLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BbW91bnQ7IGkrKykge1xuICAgICAgZGVsZXRlIHRoaXMudG9kb3NbaV07XG4gICAgfVxuICB9XG5cbiAgbG9hZFRvZG9zKCkge1xuICAgIEJ1aWxkZXIuZGVzdHJveVRvZG9zKCk7XG4gICAgY29uc3QgdG9kb3NBcnJheSA9IE9iamVjdC5rZXlzKHRoaXMudG9kb3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gQnVpbGRlci5idWlsZFRvZG8oXG4gICAgICAgIHRoaXMudG9kb3NbdG9kb3NBcnJheVtpXV0uZ2V0SWQsXG4gICAgICAgIHRoaXMudG9kb3NbdG9kb3NBcnJheVtpXV0uZ2V0TmFtZSxcbiAgICAgICAgdGhpcy50b2Rvc1t0b2Rvc0FycmF5W2ldXS5nZXREdWVEYXRlLFxuICAgICAgICB0aGlzLnRvZG9zW3RvZG9zQXJyYXlbaV1dLmdldERlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuXG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvKHRoaXMudG9kb3NbdG9kb3NBcnJheVtpXV0uZ2V0SWQpO1xuICAgICAgICBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9