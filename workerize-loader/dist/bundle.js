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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function addMethods(worker, methods) {\n    var c = 0;\n    var callbacks = {};\n    worker.addEventListener('message', function (e) {\n        var d = e.data;\n        if (d.type !== 'RPC') \n            { return; }\n        if (d.id) {\n            var f = callbacks[d.id];\n            if (f) {\n                delete callbacks[d.id];\n                if (d.error) {\n                    f[1](Object.assign(Error(d.error.message), d.error));\n                } else {\n                    f[0](d.result);\n                }\n            }\n        } else {\n            var evt = document.createEvent('Event');\n            evt.initEvent(d.method, false, false);\n            evt.data = d.params;\n            worker.dispatchEvent(evt);\n        }\n    });\n    methods.forEach(function (method) {\n        worker[method] = (function () {\n            var params = [], len = arguments.length;\n            while ( len-- ) params[ len ] = arguments[ len ];\n\n            return new Promise(function (a, b) {\n            var id = ++c;\n            callbacks[id] = [a,b];\n            worker.postMessage({\n                type: 'RPC',\n                id: id,\n                method: method,\n                params: params\n            });\n        });\n        });\n    });\n}\n\nmodule.exports = addMethods;\n//# sourceMappingURL=rpc-wrapper.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qcz8zZDY3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG4gICAgdmFyIGMgPSAwO1xuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcbiAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBkID0gZS5kYXRhO1xuICAgICAgICBpZiAoZC50eXBlICE9PSAnUlBDJykgXG4gICAgICAgICAgICB7IHJldHVybjsgfVxuICAgICAgICBpZiAoZC5pZCkge1xuICAgICAgICAgICAgdmFyIGYgPSBjYWxsYmFja3NbZC5pZF07XG4gICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbZC5pZF07XG4gICAgICAgICAgICAgICAgaWYgKGQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZlsxXShPYmplY3QuYXNzaWduKEVycm9yKGQuZXJyb3IubWVzc2FnZSksIGQuZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmWzBdKGQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEV2ZW50KGQubWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgZXZ0LmRhdGEgPSBkLnBhcmFtcztcbiAgICAgICAgICAgIHdvcmtlci5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICB3b3JrZXJbbWV0aG9kXSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgcGFyYW1zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGlkID0gKytjO1xuICAgICAgICAgICAgY2FsbGJhY2tzW2lkXSA9IFthLGJdO1xuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUlBDJyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWV0aG9kcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJwYy13cmFwcGVyLmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/workerize-loader/dist/rpc-wrapper.js\n");

/***/ }),

/***/ "./src/diff.worker.js":
/*!****************************!*\
  !*** ./src/diff.worker.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\t\t\tvar addMethods = __webpack_require__(/*! ../node_modules/workerize-loader/dist/rpc-wrapper.js */ \"./node_modules/workerize-loader/dist/rpc-wrapper.js\")\n\t\t\t\tvar methods = [\"diff\"]\n\t\t\t\tmodule.exports = function() {\n\t\t\t\t\tvar w = new Worker(__webpack_require__.p + \"7025edb5f571f3a17269.worker.js\", { name: \"[hash].worker.js\" })\n\t\t\t\t\taddMethods(w, methods)\n\t\t\t\t\t\n\t\t\t\t\treturn w\n\t\t\t\t}\n\t\t\t//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlmZi53b3JrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlmZi53b3JrZXIuanM/YjMzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcImRpZmZcIl1cblx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgdyA9IG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcwMjVlZGI1ZjU3MWYzYTE3MjY5Lndvcmtlci5qc1wiLCB7IG5hbWU6IFwiW2hhc2hdLndvcmtlci5qc1wiIH0pXG5cdFx0XHRcdFx0YWRkTWV0aG9kcyh3LCBtZXRob2RzKVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiB3XG5cdFx0XHRcdH1cblx0XHRcdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/diff.worker.js\n");

/***/ }),

/***/ "./src/github.worker.js":
/*!******************************!*\
  !*** ./src/github.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\t\t\tvar addMethods = __webpack_require__(/*! ../node_modules/workerize-loader/dist/rpc-wrapper.js */ \"./node_modules/workerize-loader/dist/rpc-wrapper.js\")\n\t\t\t\tvar methods = [\"getProfile\"]\n\t\t\t\tmodule.exports = function() {\n\t\t\t\t\tvar w = new Worker(__webpack_require__.p + \"ac17c77a8846740557fc.worker.js\", { name: \"[hash].worker.js\" })\n\t\t\t\t\taddMethods(w, methods)\n\t\t\t\t\t\n\t\t\t\t\treturn w\n\t\t\t\t}\n\t\t\t//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2l0aHViLndvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9naXRodWIud29ya2VyLmpzPzliMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cdFx0XHRcdHZhciBhZGRNZXRob2RzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdyYXBwZXIuanNcIilcblx0XHRcdFx0dmFyIG1ldGhvZHMgPSBbXCJnZXRQcm9maWxlXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhYzE3Yzc3YTg4NDY3NDA1NTdmYy53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/github.worker.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__.p = '/dist/'\n\nconst loopWorker = __webpack_require__(/*! ./loop.worker */ \"./src/loop.worker.js\")()\nconst githubWorker = __webpack_require__(/*! ./github.worker */ \"./src/github.worker.js\")()\nconst diffWorker = __webpack_require__(/*! ./diff.worker */ \"./src/diff.worker.js\")()\n\nloopWorker.expensive(1000).then(count => {\n  console.log(`Ran ${count} loops`)\n})\n\ngithubWorker.getProfile('yTakkar')\n  .then(profile => {\n    console.log(profile)\n  })\n  .catch(e => console.log(e))\n\n  diffWorker.diff().then(resp => console.log(resp))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9ICcvZGlzdC8nXG5cbmNvbnN0IGxvb3BXb3JrZXIgPSByZXF1aXJlKCcuL2xvb3Aud29ya2VyJykoKVxuY29uc3QgZ2l0aHViV29ya2VyID0gcmVxdWlyZSgnLi9naXRodWIud29ya2VyJykoKVxuY29uc3QgZGlmZldvcmtlciA9IHJlcXVpcmUoJy4vZGlmZi53b3JrZXInKSgpXG5cbmxvb3BXb3JrZXIuZXhwZW5zaXZlKDEwMDApLnRoZW4oY291bnQgPT4ge1xuICBjb25zb2xlLmxvZyhgUmFuICR7Y291bnR9IGxvb3BzYClcbn0pXG5cbmdpdGh1Yldvcmtlci5nZXRQcm9maWxlKCd5VGFra2FyJylcbiAgLnRoZW4ocHJvZmlsZSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvZmlsZSlcbiAgfSlcbiAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpXG5cbiAgZGlmZldvcmtlci5kaWZmKCkudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/loop.worker.js":
/*!****************************!*\
  !*** ./src/loop.worker.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\t\t\tvar addMethods = __webpack_require__(/*! ../node_modules/workerize-loader/dist/rpc-wrapper.js */ \"./node_modules/workerize-loader/dist/rpc-wrapper.js\")\n\t\t\t\tvar methods = [\"expensive\"]\n\t\t\t\tmodule.exports = function() {\n\t\t\t\t\tvar w = new Worker(__webpack_require__.p + \"5dbf43ff7d9e8c5964bf.worker.js\", { name: \"[hash].worker.js\" })\n\t\t\t\t\taddMethods(w, methods)\n\t\t\t\t\t\n\t\t\t\t\treturn w\n\t\t\t\t}\n\t\t\t//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9vcC53b3JrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9vcC53b3JrZXIuanM/ZTYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcImV4cGVuc2l2ZVwiXVxuXHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB3ID0gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWRiZjQzZmY3ZDllOGM1OTY0YmYud29ya2VyLmpzXCIsIHsgbmFtZTogXCJbaGFzaF0ud29ya2VyLmpzXCIgfSlcblx0XHRcdFx0XHRhZGRNZXRob2RzKHcsIG1ldGhvZHMpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIHdcblx0XHRcdFx0fVxuXHRcdFx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/loop.worker.js\n");

/***/ })

/******/ });