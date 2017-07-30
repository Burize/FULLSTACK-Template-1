/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/stylus-loader/index.js!./index.styl", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/stylus-loader/index.js!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"Myriad Pro\";\n  src: url(" + __webpack_require__(12) + ") format('woff'), url(" + __webpack_require__(11) + ") format('truetype'), url(" + __webpack_require__(10) + "#MyriadPro) format('svg');\n  font-style: normal;\n  font-weight: 300;\n}\n@font-face {\n  font-family: \"Myriad Pro\";\n  src: url(" + __webpack_require__(9) + ") format('woff'), url(" + __webpack_require__(8) + ") format('truetype');\n  font-style: normal;\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Myriad Pro\";\n  src: url(" + __webpack_require__(7) + ") format('woff'), url(" + __webpack_require__(6) + ") format('truetype');\n  font-style: normal;\n  font-weight: 500;\n}\n.portrait {\n  text-align: center;\n  position: relative;\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n}\n.portrait .circle {\n  width: 53%;\n  margin: auto;\n}\n.portrait .portrait__first-name,\n.portrait .portrait__last-name,\n.portrait .portrait__proffesion {\n  text-transform: uppercase;\n  line-height: 0.9em;\n  padding: 0;\n  margin: 0;\n}\n.portrait .portrait__first-name {\n  font-size: 1em;\n  margin-top: 8%;\n  font-weight: 300;\n}\n.portrait .portrait__last-name {\n  font-size: 1.15em;\n  font-weight: 700;\n}\n.portrait .portrait__proffesion {\n  font-size: 0.45em;\n  font-weight: 700;\n  margin-top: 0.6em;\n}\n.profile .profile__description {\n  margin: 0;\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.2em;\n  font-size: 1.05em;\n}\n.profile .profile__description span {\n  font-weight: 700;\n}\n.contact-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1em 0 1em;\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n}\n.contact-row .contact-row__field {\n  width: 31%;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #3d6cb0;\n  line-height: 1em;\n  margin: 0;\n}\n.contact-row .contact-row__value {\n  font-weight: 500;\n  line-height: 1em;\n  margin: 0;\n}\n.skills .skills-body .skills-body-row .skills-body-row__text {\n  text-align: center;\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 0.25em;\n}\n.skills .skills-body .skills-body-row .skills-body-row__points {\n  width: 80%;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.skills .skills-body .skills-body-row .skills-body-row__points .skills-body-row__point {\n  width: 5%;\n  border-radius: 100%;\n  background-color: #e6e6e6;\n}\n.skills .skills-body .skills-body-row .skills-body-row__points .skills-body-row__point .skills-body-row__point-inner {\n  padding-top: 100%;\n}\n.skills .skills-body .skills-body-row .skills-body-row__points .skills-body-row__point_active {\n  background-color: #3d6cb0;\n}\n.software .software-skills {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  padding-left: 1%;\n  padding-top: 0.5em;\n}\n.software .software-skills .software-skill {\n  width: 44.5%;\n  margin-bottom: 0.9em;\n}\n.software .software-skills .software-skill .software-skill__text {\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: 0.55em;\n}\n.software .software-skills .software-skill .load-bar {\n  background-color: #e6e6e6;\n  height: 0.9em;\n}\n.software .software-skills .software-skill .load-bar .load-bar__progress {\n  background-color: #3d6cb0;\n  height: 100%;\n}\n.point-list .title {\n  margin-bottom: 0.7em;\n}\n.point-list .point-list-row {\n  position: relative;\n  padding-left: 3.4em;\n  margin-bottom: 0.7em;\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n}\n.point-list .point-list-row::before {\n  display: block;\n  content: \"\";\n  width: 1.3em;\n  height: 1.3em;\n  border-radius: 100%;\n  background-color: #000;\n  position: absolute;\n  top: 0.6em;\n  left: 0.8em;\n}\n.point-list .point-list-row .point-list-row__title {\n  font-size: 1.7em;\n  margin: 0;\n  margin-bottom: 0.06em;\n}\n.point-list .point-list-row .point-list-row__title span {\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-right: 0.25em;\n  color: #3d6cb0;\n}\n.point-list .point-list-row .point-list-row__under-title {\n  text-transform: uppercase;\n  font-size: 1.7em;\n  margin: 0;\n}\n.point-list .point-list-row .point-list-row__text {\n  margin: 0;\n  margin-top: 0.3em;\n}\n.title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 0.4em;\n  font-size: 2.25em;\n}\n.title .icon {\n  width: 2.1em;\n  -ms-flex-negative: 0.1;\n      flex-shrink: 0.1;\n  margin-right: 0.5em;\n}\n.title .title__text {\n  color: #3d6cb0;\n  text-transform: uppercase;\n  font-family: \"Myriad Pro\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  margin: 0;\n  margin-right: 0.2em;\n}\n.title .title__line {\n  border: solid #3d6cb0 2px;\n  width: 70%;\n  -ms-flex-negative: 50;\n      flex-shrink: 50;\n}\n.icon__inner {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n}\n.icon__inner .icon-svg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.icon__inner .icon-svg__inner {\n  width: 70%;\n  height: 70%;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  padding-top: 0.2em;\n  font-size: 16px;\n  background-color: #fff;\n  color: #000;\n}\n@media screen and (max-width: 1240px) {\n  html,\n  body {\n    font-size: 15px !important;\n  }\n  .container {\n    width: 1100;\n  }\n}\n@media screen and (max-width: 1120px) {\n  html,\n  body {\n    font-size: 13px !important;\n  }\n  .container {\n    width: 1000;\n  }\n}\n@media screen and (max-width: 1020px) {\n  html,\n  body {\n    font-size: 12px !important;\n  }\n  .container {\n    width: 900;\n  }\n}\n@media screen and (max-width: 920px) {\n  html,\n  body {\n    font-size: 11px !important;\n  }\n  .container {\n    width: 815;\n  }\n}\n@media screen and (max-width: 830px) {\n  html,\n  body {\n    font-size: 10px !important;\n  }\n  .container {\n    width: 730;\n  }\n}\n@media screen and (max-width: 750px) {\n  html,\n  body {\n    font-size: 9px !important;\n  }\n  .container {\n    width: 660;\n  }\n}\n@media screen and (max-width: 690px) {\n  html,\n  body {\n    font-size: 8px !important;\n  }\n  .container {\n    width: 610;\n  }\n}\n.container {\n  width: 1220px;\n  margin: auto;\n  margin-bottom: 3em;\n  padding-top: 5.5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.container .container-left {\n  width: 40%;\n}\n.container .container-left .portrait {\n  padding-top: 3.5%;\n  max-width: 96%;\n  margin-bottom: 18%;\n  font-size: 3.58rem;\n}\n.container .container-left .profile {\n  max-width: 92.5%;\n  margin-bottom: 11%;\n}\n.container .container-left .contact {\n  max-width: 92.5%;\n  margin-bottom: 7.5%;\n}\n.container .container-left .contact .contact-body {\n  font-size: 1.2rem;\n}\n.container .container-left .skills {\n  max-width: 92.5%;\n}\n.container .container-left .skills .skills-body {\n  font-size: 1.2rem;\n}\n.container .container-right {\n  width: 56.3%;\n}\n.container .container-right .education {\n  max-width: 100%;\n  margin-bottom: 8.5%;\n  font-size: 1.05rem;\n}\n.container .container-right .experience {\n  margin-bottom: 8%;\n  font-size: 1.05rem;\n}\n.container .container-right .experience .title {\n  margin-bottom: 1.05em;\n}\n.container .container-right .experience .point-list-row__title span {\n  color: #000;\n}\n.container .container-right .software-skills {\n  font-size: 1.75rem;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-Regular.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-Regular.woff";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-bold.ttf";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-bold.woff";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-lightsemiext.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-lightsemiext.ttf";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro-lightsemiext.woff";

/***/ })
/******/ ]);