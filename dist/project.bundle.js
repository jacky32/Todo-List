/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/new-todo-modal.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/new-todo-modal.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#todo-modal-outer {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(116, 116, 116, 0.308);\n}\n\n#todo-modal {\n  width: 480px !important;\n  height: 560px !important;\n  background-color: darkgoldenrod;\n}\n\n#todo-form {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 120px 60px 1fr 60px;\n}\n\nlegend {\n  grid-column: 1 / 6;\n  font-size: 40px;\n  text-align: center;\n}\n\n.new-todo-name {\n  grid-column: 1 / 5;\n}\n\n.new-todo-star {\n  justify-content: start !important;\n}\n\n.new-todo-description {\n  grid-column: 1 / 6;\n  grid-row: 3;\n}\n\n.new-todo-due-date {\n  grid-column: 1 / 4;\n  grid-row: 4;\n}\n\n#todo-form > div,\n#todo-form > legend {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n  width: 100%;\n}\n\n.new-todo-description {\n  flex-direction: column;\n}\n\n#new-todo-description {\n  height: 80%;\n  width: 80%;\n}\n\n.new-todo-submit {\n  grid-column: 4 / 6;\n  grid-row: 4;\n}\n\n#new-todo-submit {\n  height: 60%;\n  width: 60%;\n  font-size: 18px;\n}\n", "",{"version":3,"sources":["webpack://./src/new-todo-modal.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,4CAA4C;AAC9C;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,0CAA0C;EAC1C,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,eAAe;AACjB","sourcesContent":["#todo-modal-outer {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(116, 116, 116, 0.308);\n}\n\n#todo-modal {\n  width: 480px !important;\n  height: 560px !important;\n  background-color: darkgoldenrod;\n}\n\n#todo-form {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 120px 60px 1fr 60px;\n}\n\nlegend {\n  grid-column: 1 / 6;\n  font-size: 40px;\n  text-align: center;\n}\n\n.new-todo-name {\n  grid-column: 1 / 5;\n}\n\n.new-todo-star {\n  justify-content: start !important;\n}\n\n.new-todo-description {\n  grid-column: 1 / 6;\n  grid-row: 3;\n}\n\n.new-todo-due-date {\n  grid-column: 1 / 4;\n  grid-row: 4;\n}\n\n#todo-form > div,\n#todo-form > legend {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n  width: 100%;\n}\n\n.new-todo-description {\n  flex-direction: column;\n}\n\n#new-todo-description {\n  height: 80%;\n  width: 80%;\n}\n\n.new-todo-submit {\n  grid-column: 4 / 6;\n  grid-row: 4;\n}\n\n#new-todo-submit {\n  height: 60%;\n  width: 60%;\n  font-size: 18px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/new-todo-modal.css":
/*!********************************!*\
  !*** ./src/new-todo-modal.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_new_todo_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./new-todo-modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/new-todo-modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_new_todo_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_new_todo_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_new_todo_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_new_todo_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

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
/* harmony import */ var _new_todo_modal_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-todo-modal.css */ "./src/new-todo-modal.css");
















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

    burgerIcon.addEventListener("click", () => {
      this.projectContent.classList.toggle("hidden");
    });

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
    this.projectContent = document.createElement("div");
    const newProjectText = document.createElement("input");
    const addProject = document.createElement("div");
    this.projectList = document.createElement("div");

    const plusIcon = new Image();
    plusIcon.src = _assets_plus_circle_svg__WEBPACK_IMPORTED_MODULE_9__;

    addProject.appendChild(plusIcon);

    this.projectContent.id = "project-content";
    newProjectText.id = "new-project";
    addProject.id = "add-project";
    this.projectList.id = "project-list";

    this.projectContent.append(newProjectText, addProject, this.projectList);
    this.main.appendChild(this.projectContent);

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

  static buildTodo(name, dueDate, description, starred) {
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

    const trashIcon = new Image();
    const editIcon = new Image();

    trashIcon.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__;
    editIcon.src = _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_2__;

    todoName.innerText = name;
    todoRename.appendChild(editIcon);
    todoDelete.appendChild(trashIcon);
    todoDueDate.innerText = dueDate;
    todoEdit.innerText = "Edit";
    todoDescription.innerText = description;

    Builder.toggleStars(todoStar, starred);

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

    return {
      todoDelete,
      todoEdit,
      todoStar,
      todoName,
      todoDueDate,
      todoDescription,
      todoStar,
    };
  }

  static toggleStars(todoStar, starred) {
    const emptyStarIcon = new Image();
    const fullStarIcon = new Image();

    emptyStarIcon.src = _assets_star_svg__WEBPACK_IMPORTED_MODULE_0__;
    fullStarIcon.src = _assets_star_full_svg__WEBPACK_IMPORTED_MODULE_1__;

    if (todoStar.hasChildNodes() == true) {
      todoStar.removeChild(todoStar.firstChild);
    }
    if (starred == false) {
      todoStar.appendChild(emptyStarIcon);
    } else {
      todoStar.appendChild(fullStarIcon);
    }
  }

  static destroyTodos() {
    while (this.todoContent.hasChildNodes()) {
      this.todoContent.removeChild(this.todoContent.firstChild);
    }
  }

  static buildNewTodoModal(
    name = "",
    dueDate = "",
    description = "",
    starred = false
  ) {
    const todoModalOuter = document.createElement("div");
    const todoModal = document.createElement("div");
    const todoForm = document.createElement("form");
    const todoLegend = document.createElement("legend");

    todoModalOuter.id = "todo-modal-outer";
    todoModal.id = "todo-modal";
    todoForm.id = "todo-form";

    todoLegend.textContent = "New ToDo";

    todoForm.appendChild(todoLegend);
    todoModal.appendChild(todoForm);
    todoModalOuter.appendChild(todoModal);

    const todoNewName = document.createElement("div");
    const todoNewNameLabel = document.createElement("label");
    const todoNewNameInput = document.createElement("input");

    todoNewName.classList = "new-todo-name";
    todoNewNameInput.id = "new-todo-name";
    todoNewNameLabel.setAttribute("for", "new-todo-name");
    todoNewNameInput.setAttribute("type", "text");
    todoNewNameInput.setAttribute("name", "new-todo-name");
    todoNewNameInput.setAttribute("minlength", 4);
    todoNewNameInput.setAttribute("maxlength", 16);
    todoNewNameInput.setAttribute("placeholder", "ToDo name");

    if (description != "") {
      todoNewNameInput.value = name;
    } else {
      todoNewNameInput.setAttribute("placeholder", "ToDo name");
    }

    todoNewNameInput.setAttribute("required", true);
    todoNewNameLabel.textContent = "Name:";

    todoNewName.append(todoNewNameLabel, todoNewNameInput);

    const todoNewDueDate = document.createElement("div");
    const todoNewDueDateLabel = document.createElement("label");
    const todoNewDueDateInput = document.createElement("input");

    todoNewDueDate.classList = "new-todo-due-date";
    todoNewDueDateLabel.setAttribute("for", "new-todo-due-date");
    todoNewDueDateInput.id = "new-todo-due-date";
    todoNewDueDateInput.setAttribute("type", "date");
    todoNewDueDateInput.setAttribute("name", "new-todo-due-date");
    todoNewDueDateInput.setAttribute("required", true);

    todoNewDueDateInput.value =
      description != "" ? dueDate : new Date().toJSON().slice(0, 10);

    todoNewDueDateLabel.textContent = "Due date:";

    todoNewDueDate.append(todoNewDueDateLabel, todoNewDueDateInput);

    const todoNewDescription = document.createElement("div");
    const todoNewDescriptionLabel = document.createElement("label");
    const todoNewDescriptionText = document.createElement("textarea");

    todoNewDescription.classList = "new-todo-description";
    todoNewDescriptionText.id = "new-todo-description";
    todoNewDescriptionLabel.setAttribute("for", "new-todo-description");
    todoNewDescriptionLabel.textContent = "Description:";

    if (description != "") {
      todoNewDescriptionText.value = description;
    } else {
      todoNewDescriptionText.setAttribute("placeholder", "Description");
    }
    todoNewDescriptionText.setAttribute("name", "new-todo-description");
    todoNewDescriptionText.setAttribute("required", true);

    todoNewDescription.append(todoNewDescriptionLabel, todoNewDescriptionText);

    const todoNewStar = document.createElement("div");
    const todoNewStarInput = document.createElement("input");

    todoNewStar.classList = "new-todo-star";
    todoNewStarInput.id = "new-todo-star";
    todoNewStarInput.setAttribute("type", "checkbox");
    todoNewStarInput.setAttribute("name", "new-todo-star");
    todoNewStarInput.checked = starred;

    const starImg = new Image();
    starImg.src = _assets_star_svg__WEBPACK_IMPORTED_MODULE_0__;

    todoNewStar.append(todoNewStarInput, starImg);

    const todoSubmit = document.createElement("div");
    const todoSubmitInput = document.createElement("input");

    todoSubmit.classList = "new-todo-submit";
    todoSubmitInput.id = "new-todo-submit";
    todoSubmitInput.setAttribute("type", "submit");
    todoSubmitInput.setAttribute("value", "Submit");

    todoSubmit.appendChild(todoSubmitInput);

    todoForm.append(
      todoNewName,
      todoNewDescription,
      todoNewDueDate,
      todoNewStar,
      todoSubmit
    );
    this.content.appendChild(todoModalOuter);

    todoModalOuter.addEventListener("click", (event) => {
      if (event.target == todoModalOuter) {
        todoModalOuter.remove();
      }
    });

    return {
      todoNewNameInput,
      todoNewDueDateInput,
      todoNewDescriptionText,
      todoNewStarInput,
      todoSubmit,
    };
  }

  static editTodo(todo, modal) {
    todo.todoName.textContent = modal.todoNewNameInput.value;
    todo.todoDueDate.textContent = modal.todoNewDueDateInput.value;
    todo.todoDescription.textContent = modal.todoNewDescriptionText.value;
    Builder.toggleStars(todo.todoStar, modal.todoNewStarInput.checked);
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
    const buttons = _builder_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildTodo(
      this.name,
      this.dueDate,
      this.description,
      this.starred
    );

    buttons.todoDelete.addEventListener("click", () => {
      this.project.deleteTodo(this.id);
      buttons.todoDelete.parentElement.remove();
    });

    buttons.todoEdit.addEventListener("click", () => {
      const newValues = _builder_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildNewTodoModal(
        this.name,
        this.dueDate,
        this.description,
        this.starred
      );
      newValues.todoSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (!newValues.todoSubmit.parentElement.reportValidity()) {
          console.log("invalid");
        } else {
          _builder_js__WEBPACK_IMPORTED_MODULE_0__["default"].editTodo(buttons, newValues);
          newValues.todoSubmit.parentElement.parentElement.parentElement.remove();
        }
      });
    });

    buttons.todoStar.addEventListener("click", () => {
      this.starred = this.starred == false ? true : false;
      _builder_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleStars(buttons.todoStar, this.starred);
    });
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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

  get getName() {
    return this.name;
  }

  createTodo(name, dueDate, description, starred) {
    const todoId = this.todoCount;
    const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](todoId, name, dueDate, description, starred, this);

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
      this.todos[todosArray[i]].buildSelf();
    }
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ007O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnREFBSTs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGdFQUFvQjtBQUN4QjtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3LXRvZG8tbW9kYWwuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ldy10b2RvLW1vZGFsLmNzcz9iNWY4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RvZG8tbW9kYWwtb3V0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMzA4KTtcXG59XFxuXFxuI3RvZG8tbW9kYWwge1xcbiAgd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDU2MHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggNjBweCAxZnIgNjBweDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5ldy10b2RvLW5hbWUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbn1cXG5cXG4ubmV3LXRvZG8tc3RhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uZXctdG9kby1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICBncmlkLXJvdzogMztcXG59XFxuXFxuLm5ldy10b2RvLWR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiA0O1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2LFxcbiN0b2RvLWZvcm0gPiBsZWdlbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXctdG9kby1kZXNjcmlwdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3LXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubmV3LXRvZG8tc3VibWl0IHtcXG4gIGdyaWQtY29sdW1uOiA0IC8gNjtcXG4gIGdyaWQtcm93OiA0O1xcbn1cXG5cXG4jbmV3LXRvZG8tc3VibWl0IHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25ldy10b2RvLW1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjdG9kby1tb2RhbC1vdXRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE2LCAxMTYsIDExNiwgMC4zMDgpO1xcbn1cXG5cXG4jdG9kby1tb2RhbCB7XFxuICB3aWR0aDogNDgwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogNTYwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCA2MHB4IDFmciA2MHB4O1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRvZG8tbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxufVxcblxcbi5uZXctdG9kby1zdGFyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuLm5ldy10b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gIGdyaWQtcm93OiAzO1xcbn1cXG5cXG4ubmV3LXRvZG8tZHVlLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDQ7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXYsXFxuI3RvZG8tZm9ybSA+IGxlZ2VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5ldy10b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNuZXctdG9kby1kZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5uZXctdG9kby1zdWJtaXQge1xcbiAgZ3JpZC1jb2x1bW46IDQgLyA2O1xcbiAgZ3JpZC1yb3c6IDQ7XFxufVxcblxcbiNuZXctdG9kby1zdWJtaXQge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogNjAlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ldy10b2RvLW1vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3LXRvZG8tbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBFbXB0eVN0YXIgZnJvbSBcIi4vYXNzZXRzL3N0YXIuc3ZnXCI7XG5pbXBvcnQgRnVsbFN0YXIgZnJvbSBcIi4vYXNzZXRzL3N0YXItZnVsbC5zdmdcIjtcbmltcG9ydCBFbXB0eVBlbmNpbCBmcm9tIFwiLi9hc3NldHMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IEZ1bGxQZW5jaWwgZnJvbSBcIi4vYXNzZXRzL3BlbmNpbC1mLnN2Z1wiO1xuaW1wb3J0IEVtcHR5VHJhc2ggZnJvbSBcIi4vYXNzZXRzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IEZ1bGxUcmFzaCBmcm9tIFwiLi9hc3NldHMvdHJhc2gtZi5zdmdcIjtcbmltcG9ydCBFbXB0eUNvZyBmcm9tIFwiLi9hc3NldHMvY29nLnN2Z1wiO1xuaW1wb3J0IEZ1bGxDb2cgZnJvbSBcIi4vYXNzZXRzL2NvZy1mLnN2Z1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vYXNzZXRzL21lbnUuc3ZnXCI7XG5pbXBvcnQgRW1wdHlQbHVzQ2lyY2xlIGZyb20gXCIuL2Fzc2V0cy9wbHVzLWNpcmNsZS5zdmdcIjtcbmltcG9ydCBGdWxsUGx1c0NpcmNsZSBmcm9tIFwiLi9hc3NldHMvcGx1cy1jaXJjbGUtZi5zdmdcIjtcbmltcG9ydCBFbXB0eVBsdXNSZWN0YW5nbGUgZnJvbSBcIi4vYXNzZXRzL3BsdXMtcmVjdGFuZ2xlLnN2Z1wiO1xuaW1wb3J0IEZ1bGxQbHVzUmVjdGFuZ2xlIGZyb20gXCIuL2Fzc2V0cy9wbHVzLXJlY3RhbmdsZS1mLnN2Z1wiO1xuXG5pbXBvcnQgXCIuL25ldy10b2RvLW1vZGFsLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBidWlsZENvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgYnVyZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbWVudUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBzZXR0aW5nc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbWVudUljb24uc3JjID0gTWVudTtcbiAgICBzZXR0aW5nc0ljb24uc3JjID0gRW1wdHlDb2c7XG4gICAgcGx1c0ljb24uc3JjID0gRW1wdHlQbHVzQ2lyY2xlO1xuXG4gICAgYnVyZ2VySWNvbi5pZCA9IFwiYnVyZ2VyLWljb25cIjtcbiAgICBhZGRUb2RvLmlkID0gXCJhZGQtdG9kb1wiO1xuICAgIHNldHRpbmdzLmlkID0gXCJzZXR0aW5nc1wiO1xuXG4gICAgYnVyZ2VySWNvbi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgYWRkVG9kby5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG4gICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQoc2V0dGluZ3NJY29uKTtcblxuICAgIGJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGhlYWRlci5hcHBlbmQoYnVyZ2VySWNvbiwgYWRkVG9kbywgc2V0dGluZ3MpO1xuICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgcmV0dXJuIGFkZFRvZG87XG4gIH1cblxuICBzdGF0aWMgYnVpbGRNYWluKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5tYWluLmlkID0gXCJtYWluXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkUHJvamVjdExpc3QoKSB7XG4gICAgdGhpcy5wcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHBsdXNJY29uLnNyYyA9IEVtcHR5UGx1c0NpcmNsZTtcblxuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgdGhpcy5wcm9qZWN0Q29udGVudC5pZCA9IFwicHJvamVjdC1jb250ZW50XCI7XG4gICAgbmV3UHJvamVjdFRleHQuaWQgPSBcIm5ldy1wcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdC5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgICB0aGlzLnByb2plY3RMaXN0LmlkID0gXCJwcm9qZWN0LWxpc3RcIjtcblxuICAgIHRoaXMucHJvamVjdENvbnRlbnQuYXBwZW5kKG5ld1Byb2plY3RUZXh0LCBhZGRQcm9qZWN0LCB0aGlzLnByb2plY3RMaXN0KTtcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0Q29udGVudCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0UmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdCA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgcHJvamVjdFJlbmFtZS5jbGFzc0xpc3QgPSBcInByb2plY3QtcmVuYW1lXCI7XG4gICAgcHJvamVjdERlbGV0ZS5jbGFzc0xpc3QgPSBcInByb2plY3QtZGVsZXRlXCI7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHRyYXNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgZWRpdEljb24uc3JjID0gRW1wdHlQZW5jaWw7XG4gICAgdHJhc2hJY29uLnNyYyA9IEVtcHR5VHJhc2g7XG5cbiAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIHByb2plY3RSZW5hbWUuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHByb2plY3REZWxldGUuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcblxuICAgIEJ1aWxkZXIudG9nZ2xlUHJvamVjdFNlbGVjdGVkKHByb2plY3QpO1xuICAgIHByb2plY3QuYXBwZW5kKHByb2plY3ROYW1lLCBwcm9qZWN0UmVuYW1lLCBwcm9qZWN0RGVsZXRlKTtcbiAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdFJlbmFtZSwgcHJvamVjdERlbGV0ZSwgcHJvamVjdE5hbWUgfTtcbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVQcm9qZWN0U2VsZWN0ZWQocHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5wcm9qZWN0TGlzdC5jaGlsZE5vZGVzO1xuICAgIGlmIChwcm9qZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHNbaV0uY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG4gICAgfVxuICAgIHByb2plY3QuY2xhc3NMaXN0ID0gXCJwcm9qZWN0IHNlbGVjdGVkXCI7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRUb2RvQ29udGVudCgpIHtcbiAgICB0aGlzLnRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnRvZG9Db250ZW50LmlkID0gXCJ0b2RvLWNvbnRlbnRcIjtcblxuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLnRvZG9Db250ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZFRvZG8obmFtZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHN0YXJyZWQpIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb1JlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9TdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRvZG8uY2xhc3NMaXN0ID0gXCJ0b2RvXCI7XG4gICAgdG9kb05hbWUuY2xhc3NMaXN0ID0gXCJ0b2RvLW5hbWVcIjtcbiAgICB0b2RvUmVuYW1lLmNsYXNzTGlzdCA9IFwidG9kby1yZW5hbWVcIjtcbiAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdCA9IFwidG9kby1kZWxldGVcIjtcbiAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QgPSBcInRvZG8tZHVlLWRhdGVcIjtcbiAgICB0b2RvRWRpdC5jbGFzc0xpc3QgPSBcInRvZG8tZWRpdFwiO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcInRvZG8tZGVzY3JpcHRpb25cIjtcbiAgICB0b2RvU3Rhci5jbGFzc0xpc3QgPSBcInRvZG8tc3RhclwiO1xuXG4gICAgY29uc3QgdHJhc2hJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIHRyYXNoSWNvbi5zcmMgPSBFbXB0eVRyYXNoO1xuICAgIGVkaXRJY29uLnNyYyA9IEVtcHR5UGVuY2lsO1xuXG4gICAgdG9kb05hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICB0b2RvUmVuYW1lLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICB0b2RvRGVsZXRlLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgdG9kb0R1ZURhdGUuaW5uZXJUZXh0ID0gZHVlRGF0ZTtcbiAgICB0b2RvRWRpdC5pbm5lclRleHQgPSBcIkVkaXRcIjtcbiAgICB0b2RvRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XG5cbiAgICBCdWlsZGVyLnRvZ2dsZVN0YXJzKHRvZG9TdGFyLCBzdGFycmVkKTtcblxuICAgIHRvZG8uYXBwZW5kKFxuICAgICAgdG9kb05hbWUsXG4gICAgICB0b2RvUmVuYW1lLFxuICAgICAgdG9kb0RlbGV0ZSxcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb0VkaXQsXG4gICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICB0b2RvU3RhclxuICAgICk7XG4gICAgdGhpcy50b2RvQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b2RvRGVsZXRlLFxuICAgICAgdG9kb0VkaXQsXG4gICAgICB0b2RvU3RhcixcbiAgICAgIHRvZG9OYW1lLFxuICAgICAgdG9kb0R1ZURhdGUsXG4gICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICB0b2RvU3RhcixcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZVN0YXJzKHRvZG9TdGFyLCBzdGFycmVkKSB7XG4gICAgY29uc3QgZW1wdHlTdGFySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZ1bGxTdGFySWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgZW1wdHlTdGFySWNvbi5zcmMgPSBFbXB0eVN0YXI7XG4gICAgZnVsbFN0YXJJY29uLnNyYyA9IEZ1bGxTdGFyO1xuXG4gICAgaWYgKHRvZG9TdGFyLmhhc0NoaWxkTm9kZXMoKSA9PSB0cnVlKSB7XG4gICAgICB0b2RvU3Rhci5yZW1vdmVDaGlsZCh0b2RvU3Rhci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgaWYgKHN0YXJyZWQgPT0gZmFsc2UpIHtcbiAgICAgIHRvZG9TdGFyLmFwcGVuZENoaWxkKGVtcHR5U3Rhckljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvU3Rhci5hcHBlbmRDaGlsZChmdWxsU3Rhckljb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZXN0cm95VG9kb3MoKSB7XG4gICAgd2hpbGUgKHRoaXMudG9kb0NvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLnRvZG9Db250ZW50LnJlbW92ZUNoaWxkKHRoaXMudG9kb0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGJ1aWxkTmV3VG9kb01vZGFsKFxuICAgIG5hbWUgPSBcIlwiLFxuICAgIGR1ZURhdGUgPSBcIlwiLFxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgICBzdGFycmVkID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgdG9kb01vZGFsT3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCB0b2RvTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcblxuICAgIHRvZG9Nb2RhbE91dGVyLmlkID0gXCJ0b2RvLW1vZGFsLW91dGVyXCI7XG4gICAgdG9kb01vZGFsLmlkID0gXCJ0b2RvLW1vZGFsXCI7XG4gICAgdG9kb0Zvcm0uaWQgPSBcInRvZG8tZm9ybVwiO1xuXG4gICAgdG9kb0xlZ2VuZC50ZXh0Q29udGVudCA9IFwiTmV3IFRvRG9cIjtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9MZWdlbmQpO1xuICAgIHRvZG9Nb2RhbC5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgdG9kb01vZGFsT3V0ZXIuYXBwZW5kQ2hpbGQodG9kb01vZGFsKTtcblxuICAgIGNvbnN0IHRvZG9OZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvTmV3TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRvZG9OZXdOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICB0b2RvTmV3TmFtZS5jbGFzc0xpc3QgPSBcIm5ldy10b2RvLW5hbWVcIjtcbiAgICB0b2RvTmV3TmFtZUlucHV0LmlkID0gXCJuZXctdG9kby1uYW1lXCI7XG4gICAgdG9kb05ld05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctdG9kby1uYW1lXCIpO1xuICAgIHRvZG9OZXdOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb05ld05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3LXRvZG8tbmFtZVwiKTtcbiAgICB0b2RvTmV3TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pbmxlbmd0aFwiLCA0KTtcbiAgICB0b2RvTmV3TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAxNik7XG4gICAgdG9kb05ld05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRvRG8gbmFtZVwiKTtcblxuICAgIGlmIChkZXNjcmlwdGlvbiAhPSBcIlwiKSB7XG4gICAgICB0b2RvTmV3TmFtZUlucHV0LnZhbHVlID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb05ld05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRvRG8gbmFtZVwiKTtcbiAgICB9XG5cbiAgICB0b2RvTmV3TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgIHRvZG9OZXdOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XG5cbiAgICB0b2RvTmV3TmFtZS5hcHBlbmQodG9kb05ld05hbWVMYWJlbCwgdG9kb05ld05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB0b2RvTmV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb05ld0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0b2RvTmV3RHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgdG9kb05ld0R1ZURhdGUuY2xhc3NMaXN0ID0gXCJuZXctdG9kby1kdWUtZGF0ZVwiO1xuICAgIHRvZG9OZXdEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LXRvZG8tZHVlLWRhdGVcIik7XG4gICAgdG9kb05ld0R1ZURhdGVJbnB1dC5pZCA9IFwibmV3LXRvZG8tZHVlLWRhdGVcIjtcbiAgICB0b2RvTmV3RHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIHRvZG9OZXdEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy10b2RvLWR1ZS1kYXRlXCIpO1xuICAgIHRvZG9OZXdEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG5cbiAgICB0b2RvTmV3RHVlRGF0ZUlucHV0LnZhbHVlID1cbiAgICAgIGRlc2NyaXB0aW9uICE9IFwiXCIgPyBkdWVEYXRlIDogbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG5cbiAgICB0b2RvTmV3RHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTpcIjtcblxuICAgIHRvZG9OZXdEdWVEYXRlLmFwcGVuZCh0b2RvTmV3RHVlRGF0ZUxhYmVsLCB0b2RvTmV3RHVlRGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRvZG9OZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb05ld0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdG9kb05ld0Rlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICAgIHRvZG9OZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcIm5ldy10b2RvLWRlc2NyaXB0aW9uXCI7XG4gICAgdG9kb05ld0Rlc2NyaXB0aW9uVGV4dC5pZCA9IFwibmV3LXRvZG8tZGVzY3JpcHRpb25cIjtcbiAgICB0b2RvTmV3RGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctdG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvTmV3RGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cbiAgICBpZiAoZGVzY3JpcHRpb24gIT0gXCJcIikge1xuICAgICAgdG9kb05ld0Rlc2NyaXB0aW9uVGV4dC52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTmV3RGVzY3JpcHRpb25UZXh0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgfVxuICAgIHRvZG9OZXdEZXNjcmlwdGlvblRleHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy10b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9OZXdEZXNjcmlwdGlvblRleHQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG5cbiAgICB0b2RvTmV3RGVzY3JpcHRpb24uYXBwZW5kKHRvZG9OZXdEZXNjcmlwdGlvbkxhYmVsLCB0b2RvTmV3RGVzY3JpcHRpb25UZXh0KTtcblxuICAgIGNvbnN0IHRvZG9OZXdTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvTmV3U3RhcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgdG9kb05ld1N0YXIuY2xhc3NMaXN0ID0gXCJuZXctdG9kby1zdGFyXCI7XG4gICAgdG9kb05ld1N0YXJJbnB1dC5pZCA9IFwibmV3LXRvZG8tc3RhclwiO1xuICAgIHRvZG9OZXdTdGFySW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIHRvZG9OZXdTdGFySW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy10b2RvLXN0YXJcIik7XG4gICAgdG9kb05ld1N0YXJJbnB1dC5jaGVja2VkID0gc3RhcnJlZDtcblxuICAgIGNvbnN0IHN0YXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGFySW1nLnNyYyA9IEVtcHR5U3RhcjtcblxuICAgIHRvZG9OZXdTdGFyLmFwcGVuZCh0b2RvTmV3U3RhcklucHV0LCBzdGFySW1nKTtcblxuICAgIGNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9TdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIHRvZG9TdWJtaXQuY2xhc3NMaXN0ID0gXCJuZXctdG9kby1zdWJtaXRcIjtcbiAgICB0b2RvU3VibWl0SW5wdXQuaWQgPSBcIm5ldy10b2RvLXN1Ym1pdFwiO1xuICAgIHRvZG9TdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHRvZG9TdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcblxuICAgIHRvZG9TdWJtaXQuYXBwZW5kQ2hpbGQodG9kb1N1Ym1pdElucHV0KTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZChcbiAgICAgIHRvZG9OZXdOYW1lLFxuICAgICAgdG9kb05ld0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb05ld0R1ZURhdGUsXG4gICAgICB0b2RvTmV3U3RhcixcbiAgICAgIHRvZG9TdWJtaXRcbiAgICApO1xuICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxPdXRlcik7XG5cbiAgICB0b2RvTW9kYWxPdXRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHRvZG9Nb2RhbE91dGVyKSB7XG4gICAgICAgIHRvZG9Nb2RhbE91dGVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZG9OZXdOYW1lSW5wdXQsXG4gICAgICB0b2RvTmV3RHVlRGF0ZUlucHV0LFxuICAgICAgdG9kb05ld0Rlc2NyaXB0aW9uVGV4dCxcbiAgICAgIHRvZG9OZXdTdGFySW5wdXQsXG4gICAgICB0b2RvU3VibWl0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZWRpdFRvZG8odG9kbywgbW9kYWwpIHtcbiAgICB0b2RvLnRvZG9OYW1lLnRleHRDb250ZW50ID0gbW9kYWwudG9kb05ld05hbWVJbnB1dC52YWx1ZTtcbiAgICB0b2RvLnRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gbW9kYWwudG9kb05ld0R1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICB0b2RvLnRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1vZGFsLnRvZG9OZXdEZXNjcmlwdGlvblRleHQudmFsdWU7XG4gICAgQnVpbGRlci50b2dnbGVTdGFycyh0b2RvLnRvZG9TdGFyLCBtb2RhbC50b2RvTmV3U3RhcklucHV0LmNoZWNrZWQpO1xuICB9XG59XG4iLCJpbXBvcnQgQnVpbGRlciBmcm9tIFwiLi9idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGR1ZURhdGUgPSBcIjEyLzEyLzEyMTJcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiRGVmYXVsdCBkZXNjcmlwdGlvblwiLFxuICAgIHN0YXJyZWQgPSBmYWxzZSxcbiAgICBwcm9qZWN0XG4gICkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5zdGFycmVkID0gc3RhcnJlZDtcblxuICAgIHRoaXMuYnVpbGRTZWxmKCk7XG4gIH1cblxuICBnZXQgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXRTdGFycmVkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJyZWQ7XG4gIH1cblxuICBidWlsZFNlbGYoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IEJ1aWxkZXIuYnVpbGRUb2RvKFxuICAgICAgdGhpcy5uYW1lLFxuICAgICAgdGhpcy5kdWVEYXRlLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuc3RhcnJlZFxuICAgICk7XG5cbiAgICBidXR0b25zLnRvZG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucHJvamVjdC5kZWxldGVUb2RvKHRoaXMuaWQpO1xuICAgICAgYnV0dG9ucy50b2RvRGVsZXRlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25zLnRvZG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdWYWx1ZXMgPSBCdWlsZGVyLmJ1aWxkTmV3VG9kb01vZGFsKFxuICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgIHRoaXMuZHVlRGF0ZSxcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5zdGFycmVkXG4gICAgICApO1xuICAgICAgbmV3VmFsdWVzLnRvZG9TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFuZXdWYWx1ZXMudG9kb1N1Ym1pdC5wYXJlbnRFbGVtZW50LnJlcG9ydFZhbGlkaXR5KCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImludmFsaWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQnVpbGRlci5lZGl0VG9kbyhidXR0b25zLCBuZXdWYWx1ZXMpO1xuICAgICAgICAgIG5ld1ZhbHVlcy50b2RvU3VibWl0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbnMudG9kb1N0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnJlZCA9IHRoaXMuc3RhcnJlZCA9PSBmYWxzZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIEJ1aWxkZXIudG9nZ2xlU3RhcnMoYnV0dG9ucy50b2RvU3RhciwgdGhpcy5zdGFycmVkKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCBCdWlsZGVyIGZyb20gXCIuL2J1aWxkZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XG4gICAgdGhpcy50b2RvQ291bnQgPSAwO1xuICAgIHRoaXMudG9kb3MgPSB7fTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBjcmVhdGVUb2RvKG5hbWUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBzdGFycmVkKSB7XG4gICAgY29uc3QgdG9kb0lkID0gdGhpcy50b2RvQ291bnQ7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRvZG9JZCwgbmFtZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHN0YXJyZWQsIHRoaXMpO1xuXG4gICAgdGhpcy50b2Rvc1t0b2RvSWRdID0gdG9kbztcbiAgICB0aGlzLnRvZG9Db3VudCsrO1xuICB9XG5cbiAgZGVsZXRlVG9kbyh0b2RvSWQpIHtcbiAgICBkZWxldGUgdGhpcy50b2Rvc1t0b2RvSWRdO1xuICB9XG5cbiAgZGVsZXRlVG9kb3MoKSB7XG4gICAgdG9kb0Ftb3VudCA9IE9iamVjdC5rZXlzKHRoaXMudG9kb3MpLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BbW91bnQ7IGkrKykge1xuICAgICAgZGVsZXRlIHRoaXMudG9kb3NbaV07XG4gICAgfVxuICB9XG5cbiAgbG9hZFRvZG9zKCkge1xuICAgIEJ1aWxkZXIuZGVzdHJveVRvZG9zKCk7XG4gICAgY29uc3QgdG9kb3NBcnJheSA9IE9iamVjdC5rZXlzKHRoaXMudG9kb3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy50b2Rvc1t0b2Rvc0FycmF5W2ldXS5idWlsZFNlbGYoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==