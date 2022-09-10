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
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
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
    const deleteButton = _builder_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildTodo(
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbXB0eVN0YXIgZnJvbSBcIi4vYXNzZXRzL3N0YXIuc3ZnXCI7XG5pbXBvcnQgRnVsbFN0YXIgZnJvbSBcIi4vYXNzZXRzL3N0YXItZnVsbC5zdmdcIjtcbmltcG9ydCBFbXB0eVBlbmNpbCBmcm9tIFwiLi9hc3NldHMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IEZ1bGxQZW5jaWwgZnJvbSBcIi4vYXNzZXRzL3BlbmNpbC1mLnN2Z1wiO1xuaW1wb3J0IEVtcHR5VHJhc2ggZnJvbSBcIi4vYXNzZXRzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IEZ1bGxUcmFzaCBmcm9tIFwiLi9hc3NldHMvdHJhc2gtZi5zdmdcIjtcbmltcG9ydCBFbXB0eUNvZyBmcm9tIFwiLi9hc3NldHMvY29nLnN2Z1wiO1xuaW1wb3J0IEZ1bGxDb2cgZnJvbSBcIi4vYXNzZXRzL2NvZy1mLnN2Z1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vYXNzZXRzL21lbnUuc3ZnXCI7XG5pbXBvcnQgRW1wdHlQbHVzQ2lyY2xlIGZyb20gXCIuL2Fzc2V0cy9wbHVzLWNpcmNsZS5zdmdcIjtcbmltcG9ydCBGdWxsUGx1c0NpcmNsZSBmcm9tIFwiLi9hc3NldHMvcGx1cy1jaXJjbGUtZi5zdmdcIjtcbmltcG9ydCBFbXB0eVBsdXNSZWN0YW5nbGUgZnJvbSBcIi4vYXNzZXRzL3BsdXMtcmVjdGFuZ2xlLnN2Z1wiO1xuaW1wb3J0IEZ1bGxQbHVzUmVjdGFuZ2xlIGZyb20gXCIuL2Fzc2V0cy9wbHVzLXJlY3RhbmdsZS1mLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBidWlsZENvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgYnVyZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbWVudUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBzZXR0aW5nc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbWVudUljb24uc3JjID0gTWVudTtcbiAgICBzZXR0aW5nc0ljb24uc3JjID0gRW1wdHlDb2c7XG4gICAgcGx1c0ljb24uc3JjID0gRW1wdHlQbHVzQ2lyY2xlO1xuXG4gICAgYnVyZ2VySWNvbi5pZCA9IFwiYnVyZ2VyLWljb25cIjtcbiAgICBhZGRUb2RvLmlkID0gXCJhZGQtdG9kb1wiO1xuICAgIHNldHRpbmdzLmlkID0gXCJzZXR0aW5nc1wiO1xuXG4gICAgYnVyZ2VySWNvbi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgYWRkVG9kby5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG4gICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQoc2V0dGluZ3NJY29uKTtcblxuICAgIGhlYWRlci5hcHBlbmQoYnVyZ2VySWNvbiwgYWRkVG9kbywgc2V0dGluZ3MpO1xuICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgcmV0dXJuIGFkZFRvZG87XG4gIH1cblxuICBzdGF0aWMgYnVpbGRNYWluKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5tYWluLmlkID0gXCJtYWluXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzSWNvbi5zcmMgPSBFbXB0eVBsdXNDaXJjbGU7XG5cbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICAgIHByb2plY3RDb250ZW50LmlkID0gXCJwcm9qZWN0LWNvbnRlbnRcIjtcbiAgICBuZXdQcm9qZWN0VGV4dC5pZCA9IFwibmV3LXByb2plY3RcIjtcbiAgICBhZGRQcm9qZWN0LmlkID0gXCJhZGQtcHJvamVjdFwiO1xuICAgIHRoaXMucHJvamVjdExpc3QuaWQgPSBcInByb2plY3QtbGlzdFwiO1xuXG4gICAgcHJvamVjdENvbnRlbnQuYXBwZW5kKG5ld1Byb2plY3RUZXh0LCBhZGRQcm9qZWN0LCB0aGlzLnByb2plY3RMaXN0KTtcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFJlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIHByb2plY3RSZW5hbWUuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LXJlbmFtZVwiO1xuICAgIHByb2plY3REZWxldGUuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWRlbGV0ZVwiO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCB0cmFzaEljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGVkaXRJY29uLnNyYyA9IEVtcHR5UGVuY2lsO1xuICAgIHRyYXNoSWNvbi5zcmMgPSBFbXB0eVRyYXNoO1xuXG4gICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBwcm9qZWN0UmVuYW1lLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICBwcm9qZWN0RGVsZXRlLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG5cbiAgICBCdWlsZGVyLnRvZ2dsZVByb2plY3RTZWxlY3RlZChwcm9qZWN0KTtcbiAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSwgcHJvamVjdFJlbmFtZSwgcHJvamVjdERlbGV0ZSk7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIHJldHVybiB7IHByb2plY3RSZW5hbWUsIHByb2plY3REZWxldGUsIHByb2plY3ROYW1lIH07XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlUHJvamVjdFNlbGVjdGVkKHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMucHJvamVjdExpc3QuY2hpbGROb2RlcztcbiAgICBpZiAocHJvamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzW2ldLmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuICAgIH1cbiAgICBwcm9qZWN0LmNsYXNzTGlzdCA9IFwicHJvamVjdCBzZWxlY3RlZFwiO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkVG9kb0NvbnRlbnQoKSB7XG4gICAgdGhpcy50b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy50b2RvQ29udGVudC5pZCA9IFwidG9kby1jb250ZW50XCI7XG5cbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy50b2RvQ29udGVudCk7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRUb2RvKGlkLCBuYW1lLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvUmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb1N0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdG9kby5jbGFzc0xpc3QgPSBcInRvZG9cIjtcbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QgPSBcInRvZG8tbmFtZVwiO1xuICAgIHRvZG9SZW5hbWUuY2xhc3NMaXN0ID0gXCJ0b2RvLXJlbmFtZVwiO1xuICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0ID0gXCJ0b2RvLWRlbGV0ZVwiO1xuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdCA9IFwidG9kby1kdWUtZGF0ZVwiO1xuICAgIHRvZG9FZGl0LmNsYXNzTGlzdCA9IFwidG9kby1lZGl0XCI7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdCA9IFwidG9kby1kZXNjcmlwdGlvblwiO1xuICAgIHRvZG9TdGFyLmNsYXNzTGlzdCA9IFwidG9kby1zdGFyXCI7XG5cbiAgICBjb25zdCBlbXB0eVN0YXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgdHJhc2hJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGVtcHR5U3Rhckljb24uc3JjID0gRW1wdHlTdGFyO1xuICAgIHRyYXNoSWNvbi5zcmMgPSBFbXB0eVRyYXNoO1xuICAgIGVkaXRJY29uLnNyYyA9IEVtcHR5UGVuY2lsO1xuXG4gICAgdG9kb05hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICB0b2RvUmVuYW1lLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICB0b2RvRGVsZXRlLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgdG9kb0R1ZURhdGUuaW5uZXJUZXh0ID0gZHVlRGF0ZTtcbiAgICB0b2RvRWRpdC5pbm5lclRleHQgPSBcIkVkaXRcIjtcbiAgICB0b2RvRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XG4gICAgdG9kb1N0YXIuYXBwZW5kQ2hpbGQoZW1wdHlTdGFySWNvbik7XG5cbiAgICB0b2RvLmFwcGVuZChcbiAgICAgIHRvZG9OYW1lLFxuICAgICAgdG9kb1JlbmFtZSxcbiAgICAgIHRvZG9EZWxldGUsXG4gICAgICB0b2RvRHVlRGF0ZSxcbiAgICAgIHRvZG9FZGl0LFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb1N0YXJcbiAgICApO1xuICAgIHRoaXMudG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kbyk7XG5cbiAgICByZXR1cm4gdG9kb0RlbGV0ZTtcbiAgfVxuXG4gIHN0YXRpYyBkZXN0cm95VG9kb3MoKSB7XG4gICAgd2hpbGUgKHRoaXMudG9kb0NvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLnRvZG9Db250ZW50LnJlbW92ZUNoaWxkKHRoaXMudG9kb0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgQnVpbGRlciBmcm9tIFwiLi9idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBpZCxcbiAgICBuYW1lID0gXCJEZWZhdWx0IG5hbWVcIixcbiAgICBkdWVEYXRlID0gXCIxMi8xMi8xMjEyXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIkRlZmF1bHQgZGVzY3JpcHRpb25cIixcbiAgICBwcm9qZWN0XG4gICkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5zdGFycmVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmJ1aWxkU2VsZigpO1xuICB9XG5cbiAgZ2V0IGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0U3RhcnJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFycmVkO1xuICB9XG5cbiAgYnVpbGRTZWxmKCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IEJ1aWxkZXIuYnVpbGRUb2RvKFxuICAgICAgdGhpcy5pZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMuZHVlRGF0ZSxcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLnByb2plY3QsXG4gICAgICB0aGlzLnN0YXJyZWRcbiAgICApO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9kbyh0aGlzLmlkKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=