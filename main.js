/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  display: grid;\n  grid-template-columns: 60px auto 60px 40px 60px;\n  align-items: center;\n  text-align: center;\n  background-color: lightskyblue;\n}\n\n#burger-icon {\n  grid-column: 1;\n}\n\n#add-todo {\n  grid-column: 3;\n}\n\n#settings {\n  grid-column: 5;\n}\n\nheader > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  height: 100%;\n  user-select: none;\n}\n\nheader > div:hover {\n  background-color: lightgrey;\n}\n", "",{"version":3,"sources":["webpack://./src/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,+CAA+C;EAC/C,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["header {\n  display: grid;\n  grid-template-columns: 60px auto 60px 40px 60px;\n  align-items: center;\n  text-align: center;\n  background-color: lightskyblue;\n}\n\n#burger-icon {\n  grid-column: 1;\n}\n\n#add-todo {\n  grid-column: 3;\n}\n\n#settings {\n  grid-column: 5;\n}\n\nheader > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  height: 100%;\n  user-select: none;\n}\n\nheader > div:hover {\n  background-color: lightgrey;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/initial.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/initial.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 60px 1fr;\n  height: 100vh;\n  width: 100vw;\n}\n", "",{"version":3,"sources":["webpack://./src/initial.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 60px 1fr;\n  height: 100vh;\n  width: 100vw;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main {\n  display: flex;\n  min-height: 0;\n}\n\n#project-content {\n  background-color: lightcoral;\n  width: 420px;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 40px;\n  grid-template-rows: 60px auto;\n  gap: 8px;\n  align-items: center;\n  text-align: center;\n  padding: 0 12px;\n}\n\n#new-project {\n  height: 40px;\n  border-radius: 40px;\n  box-sizing: border-box;\n  border: none;\n  padding: 12px 20px;\n}\n\n#add-project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  border: 1px solid white;\n  border-radius: 40px;\n  user-select: none;\n}\n\n#add-project:hover {\n  background-color: rgb(214, 115, 115);\n}\n\n#project-list {\n  grid-column: 1 / 3;\n  align-self: stretch;\n  overflow: auto;\n  padding: 8px 16px 8px 0;\n  margin-bottom: 12px;\n\n  display: grid;\n  grid-auto-rows: 36px;\n  align-items: center;\n  gap: 12px;\n}\n\n.project {\n  border: 1px solid white;\n  border-radius: 40px;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 36px 36px;\n  align-items: center;\n}\n\n.project:hover {\n  background-color: rgb(214, 115, 115);\n}\n\n#todo-content {\n  background-color: lightcyan;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(4, 360px);\n  grid-auto-rows: 360px;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  overflow: auto;\n}\n\n.todo {\n  width: 80%;\n  height: 80%;\n  box-sizing: border-box;\n  background-color: lightblue;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: auto 40px 40px;\n  grid-template-rows: 40px 40px auto 40px;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 12px;\n}\n\n.todo > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  border: 1px solid white;\n  border-radius: 40px;\n}\n\n.todo-name {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.todo-rename {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.todo-delete {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.todo-due-date {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.todo-edit {\n  grid-column: 2 / 4;\n  grid-row: 2;\n}\n\n.todo-description {\n  grid-column: 1 / 4;\n  grid-row: 3;\n  box-sizing: border-box;\n  padding: 10px;\n  border-radius: 16px !important;\n  justify-content: start !important;\n  align-items: start !important;\n}\n\n.todo-star {\n  grid-column: 3;\n  grid-row: 4;\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,6BAA6B;EAC7B,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,mBAAmB;;EAEnB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,aAAa;EACb,SAAS;EACT,uCAAuC;EACvC,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,qCAAqC;EACrC,uCAAuC;EACvC,QAAQ;EACR,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,iCAAiC;EACjC,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,WAAW;AACb","sourcesContent":["#main {\n  display: flex;\n  min-height: 0;\n}\n\n#project-content {\n  background-color: lightcoral;\n  width: 420px;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 40px;\n  grid-template-rows: 60px auto;\n  gap: 8px;\n  align-items: center;\n  text-align: center;\n  padding: 0 12px;\n}\n\n#new-project {\n  height: 40px;\n  border-radius: 40px;\n  box-sizing: border-box;\n  border: none;\n  padding: 12px 20px;\n}\n\n#add-project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  border: 1px solid white;\n  border-radius: 40px;\n  user-select: none;\n}\n\n#add-project:hover {\n  background-color: rgb(214, 115, 115);\n}\n\n#project-list {\n  grid-column: 1 / 3;\n  align-self: stretch;\n  overflow: auto;\n  padding: 8px 16px 8px 0;\n  margin-bottom: 12px;\n\n  display: grid;\n  grid-auto-rows: 36px;\n  align-items: center;\n  gap: 12px;\n}\n\n.project {\n  border: 1px solid white;\n  border-radius: 40px;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 36px 36px;\n  align-items: center;\n}\n\n.project:hover {\n  background-color: rgb(214, 115, 115);\n}\n\n#todo-content {\n  background-color: lightcyan;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(4, 360px);\n  grid-auto-rows: 360px;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  overflow: auto;\n}\n\n.todo {\n  width: 80%;\n  height: 80%;\n  box-sizing: border-box;\n  background-color: lightblue;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: auto 40px 40px;\n  grid-template-rows: 40px 40px auto 40px;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 12px;\n}\n\n.todo > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  border: 1px solid white;\n  border-radius: 40px;\n}\n\n.todo-name {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.todo-rename {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.todo-delete {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.todo-due-date {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.todo-edit {\n  grid-column: 2 / 4;\n  grid-row: 2;\n}\n\n.todo-description {\n  grid-column: 1 / 4;\n  grid-row: 3;\n  box-sizing: border-box;\n  padding: 10px;\n  border-radius: 16px !important;\n  justify-content: start !important;\n  align-items: start !important;\n}\n\n.todo-star {\n  grid-column: 3;\n  grid-row: 4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/header.css":
/*!************************!*\
  !*** ./src/header.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/initial.css":
/*!*************************!*\
  !*** ./src/initial.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./initial.css */ "./node_modules/css-loader/dist/cjs.js!./src/initial.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_initial_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.css */ "./src/initial.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/header.css");




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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0aWFsLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmNzcz9hYjJkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0aWFsLmNzcz8xZjk5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0byA2MHB4IDQwcHggNjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbiNidXJnZXItaWNvbiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuI2FkZC10b2RvIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4jc2V0dGluZ3Mge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxufVxcblxcbmhlYWRlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaGVhZGVyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0byA2MHB4IDQwcHggNjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbiNidXJnZXItaWNvbiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuI2FkZC10b2RvIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4jc2V0dGluZ3Mge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxufVxcblxcbmhlYWRlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaGVhZGVyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbml0aWFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4jcHJvamVjdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMTUsIDExNSk7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogOHB4IDE2cHggOHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiAzNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzNnB4IDM2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMTUsIDExNSk7XFxufVxcblxcbiN0b2RvLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMzYwcHgpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDM2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA0MHB4IDQwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggNDBweCBhdXRvIDQwcHg7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udG9kby1yZW5hbWUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvLWVkaXQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAzO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tc3RhciB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiA0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULHVDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLFFBQVE7RUFDUixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNtYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4jcHJvamVjdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMTUsIDExNSk7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogOHB4IDE2cHggOHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiAzNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzNnB4IDM2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMTUsIDExNSk7XFxufVxcblxcbiN0b2RvLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMzYwcHgpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDM2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA0MHB4IDQwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggNDBweCBhdXRvIDQwcHg7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udG9kby1yZW5hbWUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvLWVkaXQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAzO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tc3RhciB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiA0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5pdGlhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luaXRpYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luaXRpYWwuY3NzXCI7XG5pbXBvcnQgXCIuL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuL2hlYWRlci5jc3NcIjtcblxuY2xhc3MgQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGJ1cmdlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJ1cmdlckljb24uaWQgPSBcImJ1cmdlci1pY29uXCI7XG4gICAgYWRkVG9kby5pZCA9IFwiYWRkLXRvZG9cIjtcbiAgICBzZXR0aW5ncy5pZCA9IFwic2V0dGluZ3NcIjtcblxuICAgIGJ1cmdlckljb24udGV4dENvbnRlbnQgPSBcIkVcIjtcbiAgICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgc2V0dGluZ3MudGV4dENvbnRlbnQgPSBcIipcIjtcblxuICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIEFwcC5jdXJyZW50UHJvamVjdC5jcmVhdGVUb2RvKCk7XG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGJ1cmdlckljb24sIGFkZFRvZG8sIHNldHRpbmdzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRNYWluKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5tYWluLmlkID0gXCJtYWluXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcHJvamVjdENvbnRlbnQuaWQgPSBcInByb2plY3QtY29udGVudFwiO1xuICAgIG5ld1Byb2plY3RUZXh0LmlkID0gXCJuZXctcHJvamVjdFwiO1xuICAgIGFkZFByb2plY3QuaWQgPSBcImFkZC1wcm9qZWN0XCI7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5pZCA9IFwicHJvamVjdC1saXN0XCI7XG5cbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBBcHAuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0VGV4dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Q29udGVudC5hcHBlbmQobmV3UHJvamVjdFRleHQsIGFkZFByb2plY3QsIHRoaXMucHJvamVjdExpc3QpO1xuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRQcm9qZWN0KGlkLCBuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RSZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcHJvamVjdC5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIHByb2plY3RSZW5hbWUuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LXJlbmFtZVwiO1xuICAgIHByb2plY3REZWxldGUuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWRlbGV0ZVwiO1xuXG4gICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBwcm9qZWN0UmVuYW1lLmlubmVyVGV4dCA9IFwiUlwiO1xuICAgIHByb2plY3REZWxldGUuaW5uZXJUZXh0ID0gXCJYXCI7XG5cbiAgICBwcm9qZWN0UmVuYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbmFtZVwiKTtcbiAgICB9KTtcblxuICAgIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIEFwcC5kZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBBcHAuc2VsZWN0UHJvamVjdChpZCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSwgcHJvamVjdFJlbmFtZSwgcHJvamVjdERlbGV0ZSk7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZFRvZG9Db250ZW50KCkge1xuICAgIHRoaXMudG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMudG9kb0NvbnRlbnQuaWQgPSBcInRvZG8tY29udGVudFwiO1xuXG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMudG9kb0NvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkVG9kbyhpZCwgbmFtZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb1JlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9TdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRvZG8uY2xhc3NMaXN0ID0gXCJ0b2RvXCI7XG4gICAgdG9kb05hbWUuY2xhc3NMaXN0ID0gXCJ0b2RvLW5hbWVcIjtcbiAgICB0b2RvUmVuYW1lLmNsYXNzTGlzdCA9IFwidG9kby1yZW5hbWVcIjtcbiAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdCA9IFwidG9kby1kZWxldGVcIjtcbiAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QgPSBcInRvZG8tZHVlLWRhdGVcIjtcbiAgICB0b2RvRWRpdC5jbGFzc0xpc3QgPSBcInRvZG8tZWRpdFwiO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcInRvZG8tZGVzY3JpcHRpb25cIjtcbiAgICB0b2RvU3Rhci5jbGFzc0xpc3QgPSBcInRvZG8tc3RhclwiO1xuXG4gICAgdG9kb05hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICB0b2RvUmVuYW1lLmlubmVyVGV4dCA9IFwiUlwiO1xuICAgIHRvZG9EZWxldGUuaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgdG9kb0R1ZURhdGUuaW5uZXJUZXh0ID0gZHVlRGF0ZTtcbiAgICB0b2RvRWRpdC5pbm5lclRleHQgPSBcIkVkaXRcIjtcbiAgICB0b2RvRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XG4gICAgdG9kb1N0YXIuaW5uZXJUZXh0ID0gXCIqXCI7XG5cbiAgICB0b2RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBBcHAuY3VycmVudFByb2plY3QuZGVsZXRlVG9kbyhpZCk7XG4gICAgICB0b2RvLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgdG9kby5hcHBlbmQoXG4gICAgICB0b2RvTmFtZSxcbiAgICAgIHRvZG9SZW5hbWUsXG4gICAgICB0b2RvRGVsZXRlLFxuICAgICAgdG9kb0R1ZURhdGUsXG4gICAgICB0b2RvRWRpdCxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9TdGFyXG4gICAgKTtcbiAgICB0aGlzLnRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRvZG8pO1xuICB9XG5cbiAgc3RhdGljIGRlc3Ryb3lUb2RvcygpIHtcbiAgICB3aGlsZSAodGhpcy50b2RvQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHRoaXMudG9kb0NvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy50b2RvQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIHByb2plY3RDb3VudCA9IDA7XG4gIHN0YXRpYyBwcm9qZWN0cyA9IHt9O1xuICBzdGF0aWMgY3VycmVudFByb2plY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI2J1aWxkQWxsKCk7XG4gIH1cblxuICAjYnVpbGRBbGwoKSB7XG4gICAgQnVpbGRlci5idWlsZEhlYWRlcigpO1xuICAgIEJ1aWxkZXIuYnVpbGRNYWluKCk7XG4gICAgQnVpbGRlci5idWlsZFByb2plY3RMaXN0KCk7XG4gICAgQnVpbGRlci5idWlsZFRvZG9Db250ZW50KCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb2plY3RDb3VudDtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoaWQsIG5hbWUpO1xuICAgIHRoaXMucHJvamVjdHNbaWRdID0gcHJvamVjdDtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0LmxvYWRUb2RvcygpO1xuICAgIHRoaXMucHJvamVjdENvdW50Kys7XG4gIH1cblxuICBzdGF0aWMgc2VsZWN0UHJvamVjdChpZCkge1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSB0aGlzLnByb2plY3RzW2lkXTtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0LmxvYWRUb2RvcygpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVByb2plY3QoaWQpIHtcbiAgICBkZWxldGUgdGhpcy5wcm9qZWN0c1tpZF07XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XG4gICAgdGhpcy50b2RvQ291bnQgPSAwO1xuICAgIHRoaXMudG9kb3MgPSB7fTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBCdWlsZGVyLmJ1aWxkUHJvamVjdCh0aGlzLmlkLCB0aGlzLm5hbWUpO1xuICB9XG5cbiAgZ2V0IGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgY3JlYXRlVG9kbyhuYW1lLCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRvZG9JZCA9IHRoaXMudG9kb0NvdW50O1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0b2RvSWQsIG5hbWUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnRvZG9zW3RvZG9JZF0gPSB0b2RvO1xuICAgIHRoaXMudG9kb0NvdW50Kys7XG4gIH1cblxuICBkZWxldGVUb2RvKHRvZG9JZCkge1xuICAgIGRlbGV0ZSB0aGlzLnRvZG9zW3RvZG9JZF07XG4gIH1cblxuICBsb2FkVG9kb3MoKSB7XG4gICAgQnVpbGRlci5kZXN0cm95VG9kb3MoKTtcbiAgICBjb25zdCB0b2Rvc0FycmF5ID0gT2JqZWN0LmtleXModGhpcy50b2Rvcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBCdWlsZGVyLmJ1aWxkVG9kbyhcbiAgICAgICAgdGhpcy50b2Rvc1t0b2Rvc0FycmF5W2ldXS5nZXRJZCxcbiAgICAgICAgdGhpcy50b2Rvc1t0b2Rvc0FycmF5W2ldXS5nZXROYW1lLFxuICAgICAgICB0aGlzLnRvZG9zW3RvZG9zQXJyYXlbaV1dLmdldER1ZURhdGUsXG4gICAgICAgIHRoaXMudG9kb3NbdG9kb3NBcnJheVtpXV0uZ2V0RGVzY3JpcHRpb25cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBpZCxcbiAgICBuYW1lID0gXCJEZWZhdWx0IG5hbWVcIixcbiAgICBkdWVEYXRlID0gXCIxMi8xMi8xMjEyXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIkRlZmF1bHQgZGVzY3JpcHRpb25cIlxuICApIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBCdWlsZGVyLmJ1aWxkVG9kbyh0aGlzLmlkLCB0aGlzLm5hbWUsIHRoaXMuZHVlRGF0ZSwgdGhpcy5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBnZXQgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5BcHAuY3JlYXRlUHJvamVjdChcImptZW5vXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9