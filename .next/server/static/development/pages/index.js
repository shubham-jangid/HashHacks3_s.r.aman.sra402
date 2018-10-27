module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UI/global.js":
/*!**********************!*\
  !*** ./UI/global.js ***!
  \**********************/
/*! exports provided: Container, Body, Flex, Image, Heading, Text, Div, StyledLink, Wrapper, Button, SecondaryButton, Background, A, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return SecondaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./UI/variables.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalize */ "./UI/normalize.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media */ "./UI/media.js");
var _jsxFileName = "C:\\Users\\dhruv\\Desktop\\hashhack\\UI\\global.js";


function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      padding: 5px 0px;\n      width: 100%;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      padding: 5px 0px 5px 5px;\n      width: 97%;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height:  ", ";\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "global__Container",
  componentId: "sc-8dj76y-0"
})(["max-width:1400px;width:90%;margin:0 auto;display:", ";padding:", ";", ";"], function (_ref) {
  var flex = _ref.flex;
  return flex ? 'flex' : 'block';
}, function (_ref2) {
  var p = _ref2.p;
  return p || 0;
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject()));
var Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "global__Body",
  componentId: "sc-8dj76y-1"
})([""]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "global__Flex",
  componentId: "sc-8dj76y-2"
})(["flex:", ";display:flex;width:", ";height:", ";flex-direction:", ";justify-content:", ";align-items:", ";margin:", ";padding:", ";flex-wrap:", ";", ";", ";"], function (_ref3) {
  var flex = _ref3.flex;
  return flex || 0;
}, function (_ref4) {
  var w = _ref4.w;
  return w || '100%';
}, function (_ref5) {
  var h = _ref5.h;
  return h || 'inherit';
}, function (_ref6) {
  var column = _ref6.column;
  return column ? 'column' : 'row';
}, function (_ref7) {
  var justify = _ref7.justify;
  return justify || 'default';
}, function (_ref8) {
  var align = _ref8.align;
  return align || 'default';
}, function (_ref9) {
  var m = _ref9.m;
  return m || 0;
}, function (_ref10) {
  var p = _ref10.p;
  return p || 0;
}, function (_ref11) {
  var wrap = _ref11.wrap;
  return wrap ? 'wrap' : 'no-wrap';
}, function (_ref12) {
  var extra = _ref12.extra;
  return extra || '';
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject2(), function (_ref13) {
  var _ref13$res = _ref13.res,
      res = _ref13$res === void 0 ? '' : _ref13$res;
  return res;
}));
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "global__Image",
  componentId: "sc-8dj76y-3"
})(["height:", ";width:", ";border-radius:", ";box-shadow:", ";padding:", ";", "  ", ";"], function (_ref14) {
  var h = _ref14.h;
  return h || 'auto';
}, function (_ref15) {
  var w = _ref15.w;
  return w || 'auto';
}, function (_ref16) {
  var round = _ref16.round,
      roundness = _ref16.roundness;
  return round ? '50%' : roundness || '0';
}, function (_ref17) {
  var bs = _ref17.bs;
  return bs || '0px 3px 6px rgba(0, 0, 0, 0.21)';
}, function (_ref18) {
  var p = _ref18.p;
  return p || 'auto';
}, function (_ref19) {
  var _ref19$extra = _ref19.extra,
      extra = _ref19$extra === void 0 ? '' : _ref19$extra;
  return extra;
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject3(), function (_ref20) {
  var resW = _ref20.resW;
  return resW || 'auto';
}, function (_ref21) {
  var resH = _ref21.resH;
  return resH || 'inherit';
}, function (_ref22) {
  var _ref22$res = _ref22.res,
      res = _ref22$res === void 0 ? '' : _ref22$res;
  return res;
}));
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "global__Heading",
  componentId: "sc-8dj76y-4"
})(["font-family:", ";font-size:", ";margin:", ";padding:", ";text-align:", ";color:", ";", ";"], function (_ref23) {
  var secondary = _ref23.secondary;
  return secondary ? _variables__WEBPACK_IMPORTED_MODULE_3__["fontSecondary"] : _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"];
}, function (_ref24) {
  var fs = _ref24.fs;
  return fs || '30px';
}, function (_ref25) {
  var m = _ref25.m;
  return m || 0;
}, function (_ref26) {
  var p = _ref26.p;
  return p || 0;
}, function (_ref27) {
  var center = _ref27.center;
  return center ? 'center' : 'left';
}, function (_ref28) {
  var col = _ref28.col;
  return col || 'rgb(0, 0, 0)';
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject4(), function (_ref29) {
  var resFs = _ref29.resFs;
  return resFs || 'inherit';
}, function (_ref30) {
  var _ref30$res = _ref30.res,
      res = _ref30$res === void 0 ? '' : _ref30$res;
  return res;
}));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "global__Text",
  componentId: "sc-8dj76y-5"
})(["font-family:", ";font-weight:", ";letter-spacing:", ";font-size:", ";margin:", ";padding:", ";text-align:", ";color:", ";line-height:", ";width:", ";", ";"], function (_ref31) {
  var secondary = _ref31.secondary;
  return secondary ? _variables__WEBPACK_IMPORTED_MODULE_3__["fontSecondary"] : _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"];
}, function (_ref32) {
  var _ref32$fw = _ref32.fw,
      fw = _ref32$fw === void 0 ? 'normal' : _ref32$fw;
  return fw;
}, function (_ref33) {
  var _ref33$ls = _ref33.ls,
      ls = _ref33$ls === void 0 ? 'normal' : _ref33$ls;
  return ls;
}, function (_ref34) {
  var fs = _ref34.fs;
  return fs || '16px';
}, function (_ref35) {
  var m = _ref35.m;
  return m || 0;
}, function (_ref36) {
  var p = _ref36.p;
  return p || 0;
}, function (_ref37) {
  var center = _ref37.center;
  return center ? 'center' : 'left';
}, function (_ref38) {
  var col = _ref38.col;
  return col || 'rgb(0, 0, 0)';
}, function (_ref39) {
  var lheight = _ref39.lheight;
  return lheight || 1;
}, function (_ref40) {
  var w = _ref40.w;
  return w || 'auto';
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject5(), function (_ref41) {
  var _ref41$res = _ref41.res,
      res = _ref41$res === void 0 ? '' : _ref41$res;
  return res;
}));
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "global__Div",
  componentId: "sc-8dj76y-6"
})(["margin:", ";padding:", ";"], function (_ref42) {
  var m = _ref42.m;
  return m || 0;
}, function (_ref43) {
  var p = _ref43.p;
  return p || 0;
});
var A = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "global__A",
  componentId: "sc-8dj76y-7"
})(["text-decoration:none;font-size:", ";font-family:", ";padding:", ";transition:padding 0.2s ease-out;transition:color 0.15s ease-in;cursor:pointer;color:black;&:after{content:' ';display:block;width:0;height:2px;background:", ";transition:width 0.15s ease-in;}&:hover{&:after{background:#052391;width:100%;}color:#052391;}", ";"], function (_ref44) {
  var fs = _ref44.fs;
  return fs || '18px';
}, _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], function (_ref45) {
  var p = _ref45.p;
  return p || 0;
}, _variables__WEBPACK_IMPORTED_MODULE_3__["colorBlack"], function (_ref46) {
  var _ref46$extra = _ref46.extra,
      extra = _ref46$extra === void 0 ? '' : _ref46$extra;
  return extra;
});

var StyledLink = function StyledLink(_ref47) {
  var children = _ref47.children,
      _ref47$href = _ref47.href,
      href = _ref47$href === void 0 ? '#' : _ref47$href,
      p = _ref47.p;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
    p: p,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, children));
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "global__Wrapper",
  componentId: "sc-8dj76y-8"
})(["width:", ";height:", ";margin:", ";padding:", ";flex:", ";flex-wrap:", ";text-align:", ";", ";"], function (_ref48) {
  var w = _ref48.w;
  return w || 'auto';
}, function (_ref49) {
  var h = _ref49.h;
  return h || 'auto';
}, function (_ref50) {
  var m = _ref50.m;
  return m || 'auto';
}, function (_ref51) {
  var p = _ref51.p;
  return p || 'auto';
}, function (_ref52) {
  var flex = _ref52.flex;
  return flex || 'auto';
}, function (_ref53) {
  var wrap = _ref53.wrap;
  return wrap ? 'wrap' : 'no-wrap';
}, function (_ref54) {
  var center = _ref54.center;
  return center ? 'center' : 'left';
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject6(), function (_ref55) {
  var _ref55$res = _ref55.res,
      res = _ref55$res === void 0 ? '' : _ref55$res;
  return res;
}));
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(formik__WEBPACK_IMPORTED_MODULE_2__["Form"]).withConfig({
  displayName: "global__StyledForm",
  componentId: "sc-8dj76y-9"
})(["> label{display:block;padding:15px 0px 5px 0px;font-family:'Open Sans',sans-serif;font-size:14px;color:rgba(0,0,0,0.7);}> input{width:100%;padding:7px;", ";font-family:", ";font-family:'Open Sans',sans-serif;border-radius:3px;border:solid 1px rgba(0,0,0,0.27);transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;line-height:1.5;margin-top:", ";&:focus{border:solid 1px ", ";box-shadow:0 0 0 0.2rem ", ";}}> select{width:103%;padding:7px;", ";font-family:", ";border-radius:3px;border:solid 1px rgba(0,0,0,0.27);transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;line-height:1.5;&:focus{border:solid 1px red;box-shadow:0 0 0 0.2rem rgba(179,0,0,0.3);}}> button{border:none;font-family:", ";font-size:", ";color:", ";background:", ";cursor:pointer;padding:15px 80px;display:inline-block;margin:15px 0;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative;box-shadow:0 6px ", ";border-radius:5px;&:hover{box-shadow:0 4px ", ";top:2px;}&:active{box-shadow:0 0 ", ";top:6px;}}> button[type='button']{margin-left:20px;}"], _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject7()), _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], function (_ref56) {
  var mtop = _ref56.mtop;
  return mtop || '0px';
}, function (_ref57) {
  var _ref57$bg = _ref57.bg,
      bg = _ref57$bg === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref57$bg;
  return bg;
}, function (_ref58) {
  var _ref58$bg = _ref58.bg,
      bg = _ref58$bg === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref58$bg;
  return bg;
}, _media__WEBPACK_IMPORTED_MODULE_6__["default"].phone(_templateObject8()), _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], function (_ref59) {
  var _ref59$fs = _ref59.fs,
      fs = _ref59$fs === void 0 ? '18px' : _ref59$fs;
  return fs;
}, function (_ref60) {
  var _ref60$col = _ref60.col,
      col = _ref60$col === void 0 ? '#fff' : _ref60$col;
  return col;
}, function (_ref61) {
  var _ref61$bg = _ref61.bg,
      bg = _ref61$bg === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref61$bg;
  return bg;
}, function (_ref62) {
  var _ref62$sCol = _ref62.sCol,
      sCol = _ref62$sCol === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref62$sCol;
  return sCol;
}, function (_ref63) {
  var _ref63$sCol = _ref63.sCol,
      sCol = _ref63$sCol === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref63$sCol;
  return sCol;
}, function (_ref64) {
  var _ref64$sCol = _ref64.sCol,
      sCol = _ref64$sCol === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref64$sCol;
  return sCol;
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "global__Button",
  componentId: "sc-8dj76y-10"
})(["border:solid 1px ", ";padding:", ";border-radius:3px;background:none;transition:all 0.3s ease-out;font-family:", ";font-size:20px;color:", ";> a{color:", ";transition:all 0.3s ease-out;font-family:", ";font-size:20px;text-decoration:none;}&:hover{background:", ";border-color:", ";color:#fff;> a{color:#fff;}}"], function (_ref65) {
  var bc = _ref65.bc;
  return bc || 'rgba(0, 0, 0, 0.7)';
}, function (_ref66) {
  var p = _ref66.p;
  return p || '10px 30px';
}, _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], function (_ref67) {
  var col = _ref67.col;
  return col || '#000';
}, function (_ref68) {
  var col = _ref68.col;
  return col || '#000';
}, _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], function (_ref69) {
  var colBg = _ref69.colBg;
  return colBg || _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"];
}, function (_ref70) {
  var colBg = _ref70.colBg;
  return colBg || _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"];
});
var SecondaryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "global__SecondaryButton",
  componentId: "sc-8dj76y-11"
})(["border:none;font-family:", ";font-size:", ";color:", ";background:", ";cursor:pointer;padding:25px 80px;display:inline-block;margin:15px 0;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative;box-shadow:0 6px ", ";border-radius:5px;&:hover{box-shadow:0 4px ", ";top:2px;}&:active{box-shadow:0 0 ", ";top:6px;}"], _variables__WEBPACK_IMPORTED_MODULE_3__["fontPrimary"], function (_ref71) {
  var _ref71$fs = _ref71.fs,
      fs = _ref71$fs === void 0 ? '18px' : _ref71$fs;
  return fs;
}, function (_ref72) {
  var _ref72$col = _ref72.col,
      col = _ref72$col === void 0 ? '#fff' : _ref72$col;
  return col;
}, function (_ref73) {
  var _ref73$bg = _ref73.bg,
      bg = _ref73$bg === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref73$bg;
  return bg;
}, function (_ref74) {
  var _ref74$sCol = _ref74.sCol,
      sCol = _ref74$sCol === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref74$sCol;
  return sCol;
}, function (_ref75) {
  var _ref75$sCol = _ref75.sCol,
      sCol = _ref75$sCol === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref75$sCol;
  return sCol;
}, function (_ref76) {
  var _ref76$sCol = _ref76.sCol,
      sCol = _ref76$sCol === void 0 ? _variables__WEBPACK_IMPORTED_MODULE_3__["colorPrimary"] : _ref76$sCol;
  return sCol;
});
var Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "global__Background",
  componentId: "sc-8dj76y-12"
})(["background:linear-gradient(to right,", ");padding:", ";"], function (_ref77) {
  var gradient = _ref77.gradient;
  return gradient;
}, function (_ref78) {
  var p = _ref78.p;
  return p || '0px 0px';
});


/***/ }),

/***/ "./UI/media.js":
/*!*********************!*\
  !*** ./UI/media.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var sizes = {
  phone: 600,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

function phone() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media only screen and (max-width:", "px){", ";}"], sizes.phone, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
}

function desktop() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "px){", ";}"], sizes.desktop, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
}

function giant() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "px){", ";}"], sizes.giant, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
}

function tablet() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "px){", ";}"], sizes.tablet, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
}

var media = {
  phone: phone,
  desktop: desktop,
  giant: giant,
  tablet: tablet
};
/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./UI/normalize.js":
/*!*************************!*\
  !*** ./UI/normalize.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  @import url('https://fonts.googleapis.com/css?family=Lato|Noto+Serif+JP');\n  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/fonts/slick.ttf');\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var normalize = "\n  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n";
var slick = "\n.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}\n";
var slickTheme = "\n  @charset 'UTF-8';.slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-loading .slick-list{background:url(ajax-loader.gif) center center no-repeat #fff}@font-face{font-family:slick;font-weight:400;font-style:normal;src:url(fonts/slick.eot);src:url(fonts/slick.eot?#iefix) format('embedded-opentype'),url(fonts/slick.woff) format('woff'),url(fonts/slick.ttf) format('truetype'),url(fonts/slick.svg#slick) format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'\xC3\xA2\xE2\u20AC \xC2\x90'}.slick-next:before,[dir=rtl] .slick-prev:before{content:'\xC3\xA2\xE2\u20AC \xE2\u20AC\u2122'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'\xC3\xA2\xE2\u20AC \xC2\x90'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'\xC3\xA2\xE2\u201A\xAC\xC2\xA2';text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}\n  .slick-dots-custom {\n    display: flex;\n    text-align: center;\n  }\n  .slick-dots-custom li {\n    list-style: none;\n    padding: 0px 20px;\n    display: inline;\n  }\n  .slick-dots-custom li button {\n    border: none;\n    background: rgba(256, 256, 256, 0.5);\n    height: 10px 10px;\n    border-radius: 50%;\n    color: rgba(256, 256, 256, 0);\n    cursor: pointer;\n  }\n  li.slick-active button {\n    background: rgba(256, 256, 256, 1);\n    color: rgba(256, 256, 256, 1);\n  }\n\n  .slick-prev:before {\n    content: none;\n  }  .slick-next:before {\n    content: none;\n  }\n  @media only screen and (max-width: 600px) {\n    .slick-prev {\n      left: 0px\n    }\n    .slick-next {\n      right: 0px\n    }\n    .slick-dots-custom {\n      padding: 0;\n    }\n  }\n";
var svg = ".cls-1 {\n      fill: #fff;\n        stroke: #707070;\n      }\n\n      .cls-2 {\n        fill: none;\n      }\n\n      .cls-3 {\n        fill: url(#linear-gradient);\n      }\n\n      .cls-4 {\n        clip-path: url(#clip-path);\n      }\n\n      .cls-5 {\n        opacity: 0.7;\n      }\n\n      .cls-10, .cls-11, .cls-12, .cls-13, .cls-6, .cls-7, .cls-8, .cls-9 {\n        opacity: 0.66;\n      }\n\n      .cls-6 {\n        fill: url(#linear-gradient-2);\n      }\n\n      .cls-7 {\n        fill: url(#linear-gradient-3);\n      }\n\n      .cls-8 {\n        fill: url(#linear-gradient-4);\n      }\n\n      .cls-9 {\n        fill: url(#linear-gradient-5);\n      }\n\n      .cls-10 {\n        fill: url(#linear-gradient-6);\n      }\n\n      .cls-11 {\n        fill: url(#linear-gradient-7);\n      }\n\n      .cls-12 {\n        fill: url(#linear-gradient-8);\n      }\n\n      .cls-13 {\n        fill: url(#linear-gradient-9);\n      }\n\n      .cls-14 {\n        fill: url(#linear-gradient-10);\n      }\n\n      .cls-15 {\n        fill: url(#linear-gradient-11);\n      }\n\n      .cls-16 {\n        fill: url(#linear-gradient-12);\n      }\n\n      .cls-17 {\n        fill: url(#linear-gradient-13);\n      }\n\n      .cls-18 {\n        fill: url(#linear-gradient-14);\n      }\n\n      .cls-19 {\n        fill: url(#linear-gradient-15);\n      }\n\n      .cls-20 {\n        fill: url(#linear-gradient-16);\n      }\n\n      .cls-21 {\n        fill: #24126a;\n      }\n\n      .cls-22 {\n        opacity: 0.51;\n      }\n\n      .cls-23 {\n        fill: #453c9e;\n      }\n\n      .cls-24 {\n        fill: url(#linear-gradient-17);\n      }\n\n      .cls-25 {\n        fill: url(#linear-gradient-18);\n      }\n\n      .cls-26 {\n        fill: #2842a2;\n      }\n\n      .cls-27 {\n        fill: #adb1f2;\n      }\n\n      .cls-28 {\n        fill: #9198db;\n      }\n\n      .cls-29 {\n        fill: url(#linear-gradient-19);\n      }\n\n      .cls-30 {\n        opacity: 0.11;\n      }\n\n      .cls-31 {\n        clip-path: url(#clip-path-2);\n      }\n\n      .cls-32 {\n        fill: url(#linear-gradient-20);\n      }\n\n      .cls-33 {\n        fill: url(#linear-gradient-21);\n      }\n\n      .cls-34 {\n        fill: url(#linear-gradient-22);\n      }\n\n      .cls-35 {\n        fill: url(#linear-gradient-23);\n      }\n\n      .cls-36 {\n        fill: url(#radial-gradient);\n      }\n\n      .cls-37 {\n        fill: url(#linear-gradient-24);\n      }\n\n      .cls-38 {\n        fill: url(#linear-gradient-25);\n      }\n\n      .cls-39, .cls-40 {\n        fill: #42e8e0;\n      }\n\n      .cls-39 {\n        opacity: 0.5;\n      }";
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), normalize, slick, slickTheme, svg));

/***/ }),

/***/ "./UI/variables.js":
/*!*************************!*\
  !*** ./UI/variables.js ***!
  \*************************/
/*! exports provided: fontPrimary, fontSecondary, colorPrimary, colorBlack, colorWhite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontPrimary", function() { return fontPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSecondary", function() { return fontSecondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimary", function() { return colorPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlack", function() { return colorBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorWhite", function() { return colorWhite; });
var fontPrimary = "'Lato', sans-serif;";
var fontSecondary = "'Noto Serif JP', sans-serif;";
var colorPrimary = '#f99b1c';
var colorBlack = '#2c2d32';
var colorWhite = '#fff';

/***/ }),

/***/ "./build/contracts/HealthCare.json":
/*!*****************************************!*\
  !*** ./build/contracts/HealthCare.json ***!
  \*****************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"HealthCare","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"reports","outputs":[{"name":"data1","type":"uint256"},{"name":"data2","type":"uint256"},{"name":"data3","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"data1","type":"uint256"},{"name":"data2","type":"uint256"},{"name":"data3","type":"uint256"}],"name":"createReport","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getReports","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patientAddress","type":"string"},{"name":"uid","type":"uint256"}],"name":"addAccident","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"patientAddress","type":"string"}],"name":"getUIDS","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b506107e6806100206000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632d283db51461007257806359052381146100cb578063593e8dd3146101895780636ccdb778146101d4578063c220c0da146102e6575b600080fd5b34801561007e57600080fd5b506100a76004803603810190808035906020019092919080359060200190929190505050610359565b60405180848152602001838152602001828152602001935050505060405180910390f35b3480156100d757600080fd5b50610132600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061039f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561017557808201518184015260208101905061015a565b505050509050019250505060405180910390f35b34801561019557600080fd5b506101d260048036038101908080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610462565b005b3480156101e057600080fd5b506101ff600480360381019080803590602001909291905050506104e2565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561024a57808201518184015260208101905061022f565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561028c578082015181840152602081019050610271565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156102ce5780820151818401526020810190506102b3565b50505050905001965050505050505060405180910390f35b3480156102f257600080fd5b50610357600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610721565b005b60006020528160005260406000208181548110151561037457fe5b9060005260206000209060030201600091509150508060000154908060010154908060020154905083565b60606001826040518082805190602001908083835b6020831015156103d957805182526020820191506020810190506020830392506103b4565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561045657602002820191906000526020600020905b815481526020019060010190808311610442575b50505050509050919050565b600080858152602001908152602001600020606060405190810160405280858152602001848152602001838152509080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000155602082015181600101556040820151816002015550505050505050565b606080606060008090505b60038110156106175760026000808781526020019081526020016000208281548110151561051757fe5b906000526020600020906003020160000154908060018154018082558091505090600182039060005260206000200160009091929091909150555060036000808781526020019081526020016000208281548110151561057357fe5b90600052602060002090600302016001015490806001815401808255809150509060018203906000526020600020016000909192909190915055506004600080878152602001908152602001600020828154811015156105cf57fe5b906000526020600020906003020160020154908060018154018082558091505090600182039060005260206000200160009091929091909150555080806001019150506104ed565b6002600360048280548060200260200160405190810160405280929190818152602001828054801561066857602002820191906000526020600020905b815481526020019060010190808311610654575b50505050509250818054806020026020016040519081016040528092919081815260200182805480156106ba57602002820191906000526020600020905b8154815260200190600101908083116106a6575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561070c57602002820191906000526020600020905b8154815260200190600101908083116106f8575b50505050509050935093509350509193909250565b6001826040518082805190602001908083835b6020831015156107595780518252602082019150602081019050602083039250610734565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902081908060018154018082558091505090600182039060005260206000200160009091929091909150555050505600a165627a7a723058200de1cd184589f598729c89f27649c3c982e508774db661d192446dd296c054600029","deployedBytecode":"0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632d283db51461007257806359052381146100cb578063593e8dd3146101895780636ccdb778146101d4578063c220c0da146102e6575b600080fd5b34801561007e57600080fd5b506100a76004803603810190808035906020019092919080359060200190929190505050610359565b60405180848152602001838152602001828152602001935050505060405180910390f35b3480156100d757600080fd5b50610132600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061039f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561017557808201518184015260208101905061015a565b505050509050019250505060405180910390f35b34801561019557600080fd5b506101d260048036038101908080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610462565b005b3480156101e057600080fd5b506101ff600480360381019080803590602001909291905050506104e2565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561024a57808201518184015260208101905061022f565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561028c578082015181840152602081019050610271565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156102ce5780820151818401526020810190506102b3565b50505050905001965050505050505060405180910390f35b3480156102f257600080fd5b50610357600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610721565b005b60006020528160005260406000208181548110151561037457fe5b9060005260206000209060030201600091509150508060000154908060010154908060020154905083565b60606001826040518082805190602001908083835b6020831015156103d957805182526020820191506020810190506020830392506103b4565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561045657602002820191906000526020600020905b815481526020019060010190808311610442575b50505050509050919050565b600080858152602001908152602001600020606060405190810160405280858152602001848152602001838152509080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000155602082015181600101556040820151816002015550505050505050565b606080606060008090505b60038110156106175760026000808781526020019081526020016000208281548110151561051757fe5b906000526020600020906003020160000154908060018154018082558091505090600182039060005260206000200160009091929091909150555060036000808781526020019081526020016000208281548110151561057357fe5b90600052602060002090600302016001015490806001815401808255809150509060018203906000526020600020016000909192909190915055506004600080878152602001908152602001600020828154811015156105cf57fe5b906000526020600020906003020160020154908060018154018082558091505090600182039060005260206000200160009091929091909150555080806001019150506104ed565b6002600360048280548060200260200160405190810160405280929190818152602001828054801561066857602002820191906000526020600020905b815481526020019060010190808311610654575b50505050509250818054806020026020016040519081016040528092919081815260200182805480156106ba57602002820191906000526020600020905b8154815260200190600101908083116106a6575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561070c57602002820191906000526020600020905b8154815260200190600101908083116106f8575b50505050509050935093509350509193909250565b6001826040518082805190602001908083835b6020831015156107595780518252602082019150602081019050602083039250610734565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902081908060018154018082558091505090600182039060005260206000200160009091929091909150555050505600a165627a7a723058200de1cd184589f598729c89f27649c3c982e508774db661d192446dd296c054600029","sourceMap":"27:1037:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:1037:0;;;;;;;","deployedSourceMap":"27:1037:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;153:40;;8:9:-1;5:2;;;30:1;27;20:12;5:2;153:40:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;939:122;;8:9:-1;5:2;;;30:1;27;20:12;5:2;939:122:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;939:122:0;;;;;;;;;;;;;;;;;246:138;;8:9:-1;5:2;;;30:1;27;20:12;5:2;246:138:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;464:342;;8:9:-1;5:2;;;30:1;27;20:12;5:2;464:342:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;464:342:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;464:342:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;464:342:0;;;;;;;;;;;;;;;;;;;;;814:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;814:117:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;153:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;939:122::-;1000:6;1026:11;1038:14;1026:27;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1026:27:0;;;;;;;;;;;;;;;;;;;;;1019:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;939:122;;;:::o;246:138::-;331:7;:11;339:2;331:11;;;;;;;;;;;348:27;;;;;;;;;355:5;348:27;;;;362:5;348:27;;;;369:5;348:27;;;331:45;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;331:45:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;246:138;;;;:::o;464:342::-;514:6;522;530;553;562:1;553:10;;549:196;569:1;565;:5;549:196;;;592:10;608:7;:11;616:2;608:11;;;;;;;;;;;620:1;608:14;;;;;;;;;;;;;;;;;;;;:20;;;592:37;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;592:37:0;;;;;;;;;;;;;;;;;;;;;;644:10;660:7;:11;668:2;660:11;;;;;;;;;;;672:1;660:14;;;;;;;;;;;;;;;;;;;;:20;;;644:37;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;644:37:0;;;;;;;;;;;;;;;;;;;;;;696:10;712:7;:11;720:2;712:11;;;;;;;;;;;724:1;712:14;;;;;;;;;;;;;;;;;;;;:20;;;696:37;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;696:37:0;;;;;;;;;;;;;;;;;;;;;;572:3;;;;;;;549:196;;;763:10;775;787;755:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;464:342;;;;;;:::o;814:117::-;886:11;898:14;886:27;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;886:27:0;;;;;;;;;;;;;;;;;;;;;919:3;886:37;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;886:37:0;;;;;;;;;;;;;;;;;;;;;;814:117;;:::o","source":"pragma solidity ^0.4.2;\r\n\r\ncontract HealthCare {\r\n    struct Report {\r\n        uint data1;\r\n        uint data2;\r\n        uint data3;\r\n    }\r\n    \r\n\r\n    mapping(uint => Report[]) public reports;\r\n    mapping(string => uint[]) patientData;\r\n\r\n    function createReport(uint id, uint data1, uint data2, uint data3) public {\r\n        reports[id].push(Report(data1, data2, data3));\r\n    }\r\n\r\n    uint[] data1Array;\r\n    uint[] data2Array;\r\n    uint[] data3Array;\r\n    function getReports(uint id) public view returns (uint[], uint[], uint[]) {\r\n        for(uint i = 0; i < 3; i++) {\r\n            data1Array.push(reports[id][i].data1);\r\n            data2Array.push(reports[id][i].data2);\r\n            data3Array.push(reports[id][i].data3);\r\n        }\r\n        return (data1Array, data2Array, data3Array);\r\n    }\r\n\r\n    function addAccident(string patientAddress, uint uid) public {\r\n        patientData[patientAddress].push(uid);\r\n    }\r\n\r\n    function getUIDS(string patientAddress) public view returns (uint[]) {\r\n        return patientData[patientAddress];\r\n    }\r\n}\r\n","sourcePath":"C:\\Users\\dhruv\\Desktop\\hashhack\\contracts\\HealthCare.sol","ast":{"absolutePath":"/C/Users/dhruv/Desktop/hashhack/contracts/HealthCare.sol","exportedSymbols":{"HealthCare":[144]},"id":145,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".2"],"nodeType":"PragmaDirective","src":"0:23:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":144,"linearizedBaseContracts":[144],"name":"HealthCare","nodeType":"ContractDefinition","nodes":[{"canonicalName":"HealthCare.Report","id":8,"members":[{"constant":false,"id":3,"name":"data1","nodeType":"VariableDeclaration","scope":8,"src":"79:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint","nodeType":"ElementaryTypeName","src":"79:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5,"name":"data2","nodeType":"VariableDeclaration","scope":8,"src":"100:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"100:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":7,"name":"data3","nodeType":"VariableDeclaration","scope":8,"src":"121:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6,"name":"uint","nodeType":"ElementaryTypeName","src":"121:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Report","nodeType":"StructDefinition","scope":144,"src":"54:85:0","visibility":"public"},{"constant":false,"id":13,"name":"reports","nodeType":"VariableDeclaration","scope":144,"src":"153:40:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report[])"},"typeName":{"id":12,"keyType":{"id":9,"name":"uint","nodeType":"ElementaryTypeName","src":"161:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"153:25:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report[])"},"valueType":{"baseType":{"contractScope":null,"id":10,"name":"Report","nodeType":"UserDefinedTypeName","referencedDeclaration":8,"src":"169:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage_ptr","typeString":"struct HealthCare.Report"}},"id":11,"length":null,"nodeType":"ArrayTypeName","src":"169:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage_ptr","typeString":"struct HealthCare.Report[]"}}},"value":null,"visibility":"public"},{"constant":false,"id":18,"name":"patientData","nodeType":"VariableDeclaration","scope":144,"src":"200:37:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string => uint256[])"},"typeName":{"id":17,"keyType":{"id":14,"name":"string","nodeType":"ElementaryTypeName","src":"208:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"nodeType":"Mapping","src":"200:25:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string => uint256[])"},"valueType":{"baseType":{"id":15,"name":"uint","nodeType":"ElementaryTypeName","src":"218:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":16,"length":null,"nodeType":"ArrayTypeName","src":"218:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}}},"value":null,"visibility":"internal"},{"body":{"id":40,"nodeType":"Block","src":"320:64:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":34,"name":"data1","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"355:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":35,"name":"data2","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"362:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":36,"name":"data3","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"369:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":33,"name":"Report","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":8,"src":"348:6:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Report_$8_storage_ptr_$","typeString":"type(struct HealthCare.Report storage pointer)"}},"id":37,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"348:27:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_memory","typeString":"struct HealthCare.Report memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Report_$8_memory","typeString":"struct HealthCare.Report memory"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":29,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"331:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":31,"indexExpression":{"argumentTypes":null,"id":30,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"339:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"331:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":32,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"331:16:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Report_$8_storage_$returns$_t_uint256_$","typeString":"function (struct HealthCare.Report storage ref) returns (uint256)"}},"id":38,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"331:45:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":39,"nodeType":"ExpressionStatement","src":"331:45:0"}]},"documentation":null,"id":41,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createReport","nodeType":"FunctionDefinition","parameters":{"id":27,"nodeType":"ParameterList","parameters":[{"constant":false,"id":20,"name":"id","nodeType":"VariableDeclaration","scope":41,"src":"268:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":19,"name":"uint","nodeType":"ElementaryTypeName","src":"268:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":22,"name":"data1","nodeType":"VariableDeclaration","scope":41,"src":"277:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"277:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":24,"name":"data2","nodeType":"VariableDeclaration","scope":41,"src":"289:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":23,"name":"uint","nodeType":"ElementaryTypeName","src":"289:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":26,"name":"data3","nodeType":"VariableDeclaration","scope":41,"src":"301:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":25,"name":"uint","nodeType":"ElementaryTypeName","src":"301:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"267:45:0"},"payable":false,"returnParameters":{"id":28,"nodeType":"ParameterList","parameters":[],"src":"320:0:0"},"scope":144,"src":"246:138:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"constant":false,"id":44,"name":"data1Array","nodeType":"VariableDeclaration","scope":144,"src":"392:17:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":42,"name":"uint","nodeType":"ElementaryTypeName","src":"392:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":43,"length":null,"nodeType":"ArrayTypeName","src":"392:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":47,"name":"data2Array","nodeType":"VariableDeclaration","scope":144,"src":"416:17:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"416:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":46,"length":null,"nodeType":"ArrayTypeName","src":"416:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":50,"name":"data3Array","nodeType":"VariableDeclaration","scope":144,"src":"440:17:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":48,"name":"uint","nodeType":"ElementaryTypeName","src":"440:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":49,"length":null,"nodeType":"ArrayTypeName","src":"440:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"body":{"id":114,"nodeType":"Block","src":"538:268:0","statements":[{"body":{"id":107,"nodeType":"Block","src":"577:168:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":77,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"608:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":79,"indexExpression":{"argumentTypes":null,"id":78,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"616:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"608:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":81,"indexExpression":{"argumentTypes":null,"id":80,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"620:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"608:14:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage","typeString":"struct HealthCare.Report storage ref"}},"id":82,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"data1","nodeType":"MemberAccess","referencedDeclaration":3,"src":"608:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":74,"name":"data1Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"592:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"592:15:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":83,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"592:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":84,"nodeType":"ExpressionStatement","src":"592:37:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":88,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"660:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":90,"indexExpression":{"argumentTypes":null,"id":89,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"668:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"660:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":92,"indexExpression":{"argumentTypes":null,"id":91,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"672:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"660:14:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage","typeString":"struct HealthCare.Report storage ref"}},"id":93,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"data2","nodeType":"MemberAccess","referencedDeclaration":5,"src":"660:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":85,"name":"data2Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":47,"src":"644:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":87,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"644:15:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"644:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":95,"nodeType":"ExpressionStatement","src":"644:37:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":99,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"712:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":101,"indexExpression":{"argumentTypes":null,"id":100,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"720:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"712:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":103,"indexExpression":{"argumentTypes":null,"id":102,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"724:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"712:14:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage","typeString":"struct HealthCare.Report storage ref"}},"id":104,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"data3","nodeType":"MemberAccess","referencedDeclaration":7,"src":"712:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":96,"name":"data3Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":50,"src":"696:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":98,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"696:15:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":105,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"696:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":106,"nodeType":"ExpressionStatement","src":"696:37:0"}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":68,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"565:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"hexValue":"33","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"569:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_3_by_1","typeString":"int_const 3"},"value":"3"},"src":"565:5:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":108,"initializationExpression":{"assignments":[65],"declarations":[{"constant":false,"id":65,"name":"i","nodeType":"VariableDeclaration","scope":115,"src":"553:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":64,"name":"uint","nodeType":"ElementaryTypeName","src":"553:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":67,"initialValue":{"argumentTypes":null,"hexValue":"30","id":66,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"562:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"553:10:0"},"loopExpression":{"expression":{"argumentTypes":null,"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"572:3:0","subExpression":{"argumentTypes":null,"id":71,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"572:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":73,"nodeType":"ExpressionStatement","src":"572:3:0"},"nodeType":"ForStatement","src":"549:196:0"},{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"id":109,"name":"data1Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"763:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},{"argumentTypes":null,"id":110,"name":"data2Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":47,"src":"775:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},{"argumentTypes":null,"id":111,"name":"data3Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":50,"src":"787:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}}],"id":112,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"762:36:0","typeDescriptions":{"typeIdentifier":"t_tuple$_t_array$_t_uint256_$dyn_storage_$_t_array$_t_uint256_$dyn_storage_$_t_array$_t_uint256_$dyn_storage_$","typeString":"tuple(uint256[] storage ref,uint256[] storage ref,uint256[] storage ref)"}},"functionReturnParameters":63,"id":113,"nodeType":"Return","src":"755:43:0"}]},"documentation":null,"id":115,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getReports","nodeType":"FunctionDefinition","parameters":{"id":53,"nodeType":"ParameterList","parameters":[{"constant":false,"id":52,"name":"id","nodeType":"VariableDeclaration","scope":115,"src":"484:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":51,"name":"uint","nodeType":"ElementaryTypeName","src":"484:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"483:9:0"},"payable":false,"returnParameters":{"id":63,"nodeType":"ParameterList","parameters":[{"constant":false,"id":56,"name":"","nodeType":"VariableDeclaration","scope":115,"src":"514:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":54,"name":"uint","nodeType":"ElementaryTypeName","src":"514:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":55,"length":null,"nodeType":"ArrayTypeName","src":"514:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":59,"name":"","nodeType":"VariableDeclaration","scope":115,"src":"522:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":57,"name":"uint","nodeType":"ElementaryTypeName","src":"522:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":58,"length":null,"nodeType":"ArrayTypeName","src":"522:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"","nodeType":"VariableDeclaration","scope":115,"src":"530:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":60,"name":"uint","nodeType":"ElementaryTypeName","src":"530:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":61,"length":null,"nodeType":"ArrayTypeName","src":"530:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"513:24:0"},"scope":144,"src":"464:342:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"875:56:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":126,"name":"uid","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":119,"src":"919:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":122,"name":"patientData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"886:11:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string memory => uint256[] storage ref)"}},"id":124,"indexExpression":{"argumentTypes":null,"id":123,"name":"patientAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"898:14:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"886:27:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":125,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"886:32:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":127,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"886:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"886:37:0"}]},"documentation":null,"id":130,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"addAccident","nodeType":"FunctionDefinition","parameters":{"id":120,"nodeType":"ParameterList","parameters":[{"constant":false,"id":117,"name":"patientAddress","nodeType":"VariableDeclaration","scope":130,"src":"835:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":116,"name":"string","nodeType":"ElementaryTypeName","src":"835:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":119,"name":"uid","nodeType":"VariableDeclaration","scope":130,"src":"858:8:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":118,"name":"uint","nodeType":"ElementaryTypeName","src":"858:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"834:33:0"},"payable":false,"returnParameters":{"id":121,"nodeType":"ParameterList","parameters":[],"src":"875:0:0"},"scope":144,"src":"814:117:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":142,"nodeType":"Block","src":"1008:53:0","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":138,"name":"patientData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"1026:11:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string memory => uint256[] storage ref)"}},"id":140,"indexExpression":{"argumentTypes":null,"id":139,"name":"patientAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"1038:14:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1026:27:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"functionReturnParameters":137,"id":141,"nodeType":"Return","src":"1019:34:0"}]},"documentation":null,"id":143,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getUIDS","nodeType":"FunctionDefinition","parameters":{"id":133,"nodeType":"ParameterList","parameters":[{"constant":false,"id":132,"name":"patientAddress","nodeType":"VariableDeclaration","scope":143,"src":"956:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":131,"name":"string","nodeType":"ElementaryTypeName","src":"956:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"955:23:0"},"payable":false,"returnParameters":{"id":137,"nodeType":"ParameterList","parameters":[{"constant":false,"id":136,"name":"","nodeType":"VariableDeclaration","scope":143,"src":"1000:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":134,"name":"uint","nodeType":"ElementaryTypeName","src":"1000:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":135,"length":null,"nodeType":"ArrayTypeName","src":"1000:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"999:8:0"},"scope":144,"src":"939:122:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":145,"src":"27:1037:0"}],"src":"0:1066:0"},"legacyAST":{"absolutePath":"/C/Users/dhruv/Desktop/hashhack/contracts/HealthCare.sol","exportedSymbols":{"HealthCare":[144]},"id":145,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".2"],"nodeType":"PragmaDirective","src":"0:23:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":144,"linearizedBaseContracts":[144],"name":"HealthCare","nodeType":"ContractDefinition","nodes":[{"canonicalName":"HealthCare.Report","id":8,"members":[{"constant":false,"id":3,"name":"data1","nodeType":"VariableDeclaration","scope":8,"src":"79:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint","nodeType":"ElementaryTypeName","src":"79:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5,"name":"data2","nodeType":"VariableDeclaration","scope":8,"src":"100:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"100:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":7,"name":"data3","nodeType":"VariableDeclaration","scope":8,"src":"121:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6,"name":"uint","nodeType":"ElementaryTypeName","src":"121:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Report","nodeType":"StructDefinition","scope":144,"src":"54:85:0","visibility":"public"},{"constant":false,"id":13,"name":"reports","nodeType":"VariableDeclaration","scope":144,"src":"153:40:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report[])"},"typeName":{"id":12,"keyType":{"id":9,"name":"uint","nodeType":"ElementaryTypeName","src":"161:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"153:25:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report[])"},"valueType":{"baseType":{"contractScope":null,"id":10,"name":"Report","nodeType":"UserDefinedTypeName","referencedDeclaration":8,"src":"169:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage_ptr","typeString":"struct HealthCare.Report"}},"id":11,"length":null,"nodeType":"ArrayTypeName","src":"169:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage_ptr","typeString":"struct HealthCare.Report[]"}}},"value":null,"visibility":"public"},{"constant":false,"id":18,"name":"patientData","nodeType":"VariableDeclaration","scope":144,"src":"200:37:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string => uint256[])"},"typeName":{"id":17,"keyType":{"id":14,"name":"string","nodeType":"ElementaryTypeName","src":"208:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"nodeType":"Mapping","src":"200:25:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string => uint256[])"},"valueType":{"baseType":{"id":15,"name":"uint","nodeType":"ElementaryTypeName","src":"218:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":16,"length":null,"nodeType":"ArrayTypeName","src":"218:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}}},"value":null,"visibility":"internal"},{"body":{"id":40,"nodeType":"Block","src":"320:64:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":34,"name":"data1","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"355:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":35,"name":"data2","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"362:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":36,"name":"data3","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"369:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":33,"name":"Report","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":8,"src":"348:6:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Report_$8_storage_ptr_$","typeString":"type(struct HealthCare.Report storage pointer)"}},"id":37,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"348:27:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_memory","typeString":"struct HealthCare.Report memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Report_$8_memory","typeString":"struct HealthCare.Report memory"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":29,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"331:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":31,"indexExpression":{"argumentTypes":null,"id":30,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"339:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"331:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":32,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"331:16:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Report_$8_storage_$returns$_t_uint256_$","typeString":"function (struct HealthCare.Report storage ref) returns (uint256)"}},"id":38,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"331:45:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":39,"nodeType":"ExpressionStatement","src":"331:45:0"}]},"documentation":null,"id":41,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createReport","nodeType":"FunctionDefinition","parameters":{"id":27,"nodeType":"ParameterList","parameters":[{"constant":false,"id":20,"name":"id","nodeType":"VariableDeclaration","scope":41,"src":"268:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":19,"name":"uint","nodeType":"ElementaryTypeName","src":"268:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":22,"name":"data1","nodeType":"VariableDeclaration","scope":41,"src":"277:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"277:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":24,"name":"data2","nodeType":"VariableDeclaration","scope":41,"src":"289:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":23,"name":"uint","nodeType":"ElementaryTypeName","src":"289:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":26,"name":"data3","nodeType":"VariableDeclaration","scope":41,"src":"301:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":25,"name":"uint","nodeType":"ElementaryTypeName","src":"301:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"267:45:0"},"payable":false,"returnParameters":{"id":28,"nodeType":"ParameterList","parameters":[],"src":"320:0:0"},"scope":144,"src":"246:138:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"constant":false,"id":44,"name":"data1Array","nodeType":"VariableDeclaration","scope":144,"src":"392:17:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":42,"name":"uint","nodeType":"ElementaryTypeName","src":"392:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":43,"length":null,"nodeType":"ArrayTypeName","src":"392:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":47,"name":"data2Array","nodeType":"VariableDeclaration","scope":144,"src":"416:17:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"416:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":46,"length":null,"nodeType":"ArrayTypeName","src":"416:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":50,"name":"data3Array","nodeType":"VariableDeclaration","scope":144,"src":"440:17:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":48,"name":"uint","nodeType":"ElementaryTypeName","src":"440:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":49,"length":null,"nodeType":"ArrayTypeName","src":"440:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"body":{"id":114,"nodeType":"Block","src":"538:268:0","statements":[{"body":{"id":107,"nodeType":"Block","src":"577:168:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":77,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"608:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":79,"indexExpression":{"argumentTypes":null,"id":78,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"616:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"608:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":81,"indexExpression":{"argumentTypes":null,"id":80,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"620:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"608:14:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage","typeString":"struct HealthCare.Report storage ref"}},"id":82,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"data1","nodeType":"MemberAccess","referencedDeclaration":3,"src":"608:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":74,"name":"data1Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"592:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"592:15:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":83,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"592:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":84,"nodeType":"ExpressionStatement","src":"592:37:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":88,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"660:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":90,"indexExpression":{"argumentTypes":null,"id":89,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"668:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"660:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":92,"indexExpression":{"argumentTypes":null,"id":91,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"672:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"660:14:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage","typeString":"struct HealthCare.Report storage ref"}},"id":93,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"data2","nodeType":"MemberAccess","referencedDeclaration":5,"src":"660:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":85,"name":"data2Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":47,"src":"644:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":87,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"644:15:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"644:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":95,"nodeType":"ExpressionStatement","src":"644:37:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":99,"name":"reports","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"712:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_array$_t_struct$_Report_$8_storage_$dyn_storage_$","typeString":"mapping(uint256 => struct HealthCare.Report storage ref[] storage ref)"}},"id":101,"indexExpression":{"argumentTypes":null,"id":100,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":52,"src":"720:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"712:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Report_$8_storage_$dyn_storage","typeString":"struct HealthCare.Report storage ref[] storage ref"}},"id":103,"indexExpression":{"argumentTypes":null,"id":102,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"724:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"712:14:0","typeDescriptions":{"typeIdentifier":"t_struct$_Report_$8_storage","typeString":"struct HealthCare.Report storage ref"}},"id":104,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"data3","nodeType":"MemberAccess","referencedDeclaration":7,"src":"712:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":96,"name":"data3Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":50,"src":"696:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":98,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"696:15:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":105,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"696:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":106,"nodeType":"ExpressionStatement","src":"696:37:0"}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":68,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"565:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"hexValue":"33","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"569:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_3_by_1","typeString":"int_const 3"},"value":"3"},"src":"565:5:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":108,"initializationExpression":{"assignments":[65],"declarations":[{"constant":false,"id":65,"name":"i","nodeType":"VariableDeclaration","scope":115,"src":"553:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":64,"name":"uint","nodeType":"ElementaryTypeName","src":"553:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":67,"initialValue":{"argumentTypes":null,"hexValue":"30","id":66,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"562:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"553:10:0"},"loopExpression":{"expression":{"argumentTypes":null,"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"572:3:0","subExpression":{"argumentTypes":null,"id":71,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":65,"src":"572:1:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":73,"nodeType":"ExpressionStatement","src":"572:3:0"},"nodeType":"ForStatement","src":"549:196:0"},{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"id":109,"name":"data1Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"763:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},{"argumentTypes":null,"id":110,"name":"data2Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":47,"src":"775:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},{"argumentTypes":null,"id":111,"name":"data3Array","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":50,"src":"787:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}}],"id":112,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"762:36:0","typeDescriptions":{"typeIdentifier":"t_tuple$_t_array$_t_uint256_$dyn_storage_$_t_array$_t_uint256_$dyn_storage_$_t_array$_t_uint256_$dyn_storage_$","typeString":"tuple(uint256[] storage ref,uint256[] storage ref,uint256[] storage ref)"}},"functionReturnParameters":63,"id":113,"nodeType":"Return","src":"755:43:0"}]},"documentation":null,"id":115,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getReports","nodeType":"FunctionDefinition","parameters":{"id":53,"nodeType":"ParameterList","parameters":[{"constant":false,"id":52,"name":"id","nodeType":"VariableDeclaration","scope":115,"src":"484:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":51,"name":"uint","nodeType":"ElementaryTypeName","src":"484:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"483:9:0"},"payable":false,"returnParameters":{"id":63,"nodeType":"ParameterList","parameters":[{"constant":false,"id":56,"name":"","nodeType":"VariableDeclaration","scope":115,"src":"514:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":54,"name":"uint","nodeType":"ElementaryTypeName","src":"514:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":55,"length":null,"nodeType":"ArrayTypeName","src":"514:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":59,"name":"","nodeType":"VariableDeclaration","scope":115,"src":"522:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":57,"name":"uint","nodeType":"ElementaryTypeName","src":"522:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":58,"length":null,"nodeType":"ArrayTypeName","src":"522:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"","nodeType":"VariableDeclaration","scope":115,"src":"530:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":60,"name":"uint","nodeType":"ElementaryTypeName","src":"530:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":61,"length":null,"nodeType":"ArrayTypeName","src":"530:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"513:24:0"},"scope":144,"src":"464:342:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"875:56:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":126,"name":"uid","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":119,"src":"919:3:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":122,"name":"patientData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"886:11:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string memory => uint256[] storage ref)"}},"id":124,"indexExpression":{"argumentTypes":null,"id":123,"name":"patientAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"898:14:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"886:27:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":125,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"886:32:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":127,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"886:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"886:37:0"}]},"documentation":null,"id":130,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"addAccident","nodeType":"FunctionDefinition","parameters":{"id":120,"nodeType":"ParameterList","parameters":[{"constant":false,"id":117,"name":"patientAddress","nodeType":"VariableDeclaration","scope":130,"src":"835:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":116,"name":"string","nodeType":"ElementaryTypeName","src":"835:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":119,"name":"uid","nodeType":"VariableDeclaration","scope":130,"src":"858:8:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":118,"name":"uint","nodeType":"ElementaryTypeName","src":"858:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"834:33:0"},"payable":false,"returnParameters":{"id":121,"nodeType":"ParameterList","parameters":[],"src":"875:0:0"},"scope":144,"src":"814:117:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":142,"nodeType":"Block","src":"1008:53:0","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":138,"name":"patientData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"1026:11:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_string_memory_$_t_array$_t_uint256_$dyn_storage_$","typeString":"mapping(string memory => uint256[] storage ref)"}},"id":140,"indexExpression":{"argumentTypes":null,"id":139,"name":"patientAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"1038:14:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1026:27:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"functionReturnParameters":137,"id":141,"nodeType":"Return","src":"1019:34:0"}]},"documentation":null,"id":143,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getUIDS","nodeType":"FunctionDefinition","parameters":{"id":133,"nodeType":"ParameterList","parameters":[{"constant":false,"id":132,"name":"patientAddress","nodeType":"VariableDeclaration","scope":143,"src":"956:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":131,"name":"string","nodeType":"ElementaryTypeName","src":"956:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"955:23:0"},"payable":false,"returnParameters":{"id":137,"nodeType":"ParameterList","parameters":[{"constant":false,"id":136,"name":"","nodeType":"VariableDeclaration","scope":143,"src":"1000:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":134,"name":"uint","nodeType":"ElementaryTypeName","src":"1000:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":135,"length":null,"nodeType":"ArrayTypeName","src":"1000:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"999:8:0"},"scope":144,"src":"939:122:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":145,"src":"27:1037:0"}],"src":"0:1066:0"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x801fef1799310a0118adb873102dd88b8c621153","transactionHash":"0x1be021a82e576aa4eebe24214d781fa38fe4abaa29ebad2ae2e44e4a8c2883cf"}},"schemaVersion":"2.0.1","updatedAt":"2018-10-27T03:28:58.478Z"};

/***/ }),

/***/ "./components/AddAccident.js":
/*!***********************************!*\
  !*** ./components/AddAccident.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../UI/global */ "./UI/global.js");
/* harmony import */ var _UIDForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIDForm.js */ "./components/UIDForm.js");
var _jsxFileName = "C:\\Users\\dhruv\\Desktop\\hashhack\\components\\AddAccident.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AddAccident__Background",
  componentId: "sc-12se6xn-0"
})(["background:#fff;box-shadow:0px 3px 5px rgba(0,0,0,0.21);border-radius:5px;width:900px;margin:50px auto;padding:10px 30px;"]);

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateUuid", function (_ref) {
      var address = _ref.address;
      var ui = Math.floor((1 + Math.random()) * 0x10000);

      _this.setState(function () {
        return {
          uid: ui
        };
      });

      return _this.state.healthCareInstace.addAccident(address, ui, {
        from: _this.state.account
      });
    });

    _this.state = {
      account: _this.props.account,
      healthCareInstace: props.healthCareInstace,
      uid: null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        col: "#000",
        fs: "35px",
        m: "50px 0",
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Add Accident"), this.state.uid && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        center: true,
        col: "#000",
        p: "10px 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Your UID is: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.uid)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UIDForm_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onSubmit: this.generateUuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/UIDForm.js":
/*!*******************************!*\
  !*** ./components/UIDForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../UI/global */ "./UI/global.js");
var _jsxFileName = "C:\\Users\\dhruv\\Desktop\\hashhack\\components\\UIDForm.js";





var UUIDForm = function UUIDForm(_ref) {
  var isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_3__["StyledForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    id: "address",
    name: "address",
    placeholder: "Enter Address here...",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !!isSubmitting,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Generate"));
};

var FormikUUID = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: function mapPropsToValues() {},
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    address: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Adddress is required.')
  }),
  handleSubmit: function handleSubmit(_ref2, _ref3) {
    var address = _ref2.address;
    var props = _ref3.props,
        setErrors = _ref3.setErrors,
        setSubmitting = _ref3.setSubmitting;
    console.log('called');
    props.onSubmit({
      address: address
    }).then(function (res) {
      console.log(res);
      setSubmitting(false);
    }).catch(function (err) {
      console.log(err);
      setErrors({
        error: "Something Went wrong ".concat(err)
      });
      setSubmitting(false);
    });
  }
})(UUIDForm);
/* harmony default export */ __webpack_exports__["default"] = (FormikUUID);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _build_contracts_HealthCare_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../build/contracts/HealthCare.json */ "./build/contracts/HealthCare.json");
var _build_contracts_HealthCare_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../build/contracts/HealthCare.json */ "./build/contracts/HealthCare.json", 1);
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! truffle-contract */ "truffle-contract");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_normalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../UI/normalize */ "./UI/normalize.js");
/* harmony import */ var _UI_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../UI/global */ "./UI/global.js");
/* harmony import */ var _components_UIDForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/UIDForm */ "./components/UIDForm.js");
/* harmony import */ var _components_AddAccident__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/AddAccident */ "./components/AddAccident.js");
var _jsxFileName = "C:\\Users\\dhruv\\Desktop\\hashhack\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React from 'react    ';





 // Components



var Background = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__Background",
  componentId: "rt4jnz-0"
})(["height:100vh;width:100vw;background:linear-gradient(to right,#01387f,#007ee4);"]);

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      healthCareInstace: null,
      account: null,
      options: ["Add Accident", "Get Accident UIDS", "Create Report", "getReport"],
      selected: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateUuid", function (_ref) {
      var address = _ref.address;
      var ui = Math.floor((1 + Math.random()) * 0x10000);
      return _this.state.healthCareInstace.addAccident(address, ui, {
        from: _this.state.account
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function () {
      _this.state.healthCareInstace.getUIDS("0xB97697aD8b5894561c6842123c8C4D8cb921C49B").then(function (data) {
        return console.log(data);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addData", function () {
      _this.state.healthCareInstace.createReport(1, 1, 2, 3, {
        from: _this.state.account
      }).then(function (data) {
        return console.log(data);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateSelected", function (i) {
      _this.setState(function () {
        return {
          selected: i
        };
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var web3Provider = new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider("http://localhost:7545");
      web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(web3Provider);
      var healthCare = truffle_contract__WEBPACK_IMPORTED_MODULE_3___default()(_build_contracts_HealthCare_json__WEBPACK_IMPORTED_MODULE_2__);
      healthCare.setProvider(web3Provider);
      web3.eth.getCoinbase(function (err, account) {
        _this2.setState(function () {
          return {
            account: account
          };
        });
      });
      healthCare.deployed().then(function (instance) {
        console.log(instance);

        _this2.setState(function () {
          return {
            healthCareInstace: instance
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_normalize__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        fs: "60px",
        p: "70px 0 0 0",
        center: true,
        col: "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "HealtyFy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
        m: "50px 0 0 0",
        justify: "space-evenly",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.state.options.map(function (option, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_global__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          key: option,
          onClick: function onClick() {
            return _this3.updateSelected(i + 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, option);
      })), this.state.healthCareInstace && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddAccident__WEBPACK_IMPORTED_MODULE_8__["default"], {
        account: this.state.account,
        healthCareInstace: this.state.healthCareInstace,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "truffle-contract":
/*!***********************************!*\
  !*** external "truffle-contract" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map