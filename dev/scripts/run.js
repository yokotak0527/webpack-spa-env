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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

// const Vue       = require('vue');
// const VueRouter = require('vue-router');
//
// // 0. モジュールシステムを使っている場合 (例: vue-clie 経由で)、Vue と VueRouter をインポートし、Vue.use(VueRouter) を呼び出します。
//
// // 1. ルートコンポーネントを定義します
// // 他のファイルからインポートすることもできます
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
//
// // 2. ルートをいくつか定義します
// // 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// // このコンポーネントは実際の Vue.extend()、
// // またはコンポーネントオプションのオブジェクトでも構いません。
// // ネストされたルートに関しては後で説明します
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
//
// // 3. ルーターインスタンスを作成して、ルートオプションを渡します
// // 追加のオプションをここで指定できますが、
// // この例ではシンプルにしましょう
// const router = new VueRouter({
//   routes // routes: routes の短縮表記
// })
//
// // 4. root となるインスタンスを作成してマウントします
// // アプリケーション全体がルーターを認知できるように、
// // ルーターをインジェクトすることを忘れないでください。
// const app = new Vue({
//   router
// }).$mount('#app')
//
// // これで開始です!


/***/ })

/******/ });