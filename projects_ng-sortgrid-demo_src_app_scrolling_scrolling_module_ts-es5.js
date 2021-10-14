(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkng_sortgrid"] = self["webpackChunkng_sortgrid"] || []).push([["projects_ng-sortgrid-demo_src_app_scrolling_scrolling_module_ts"], {
    /***/
    4304: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollingComponent": function ScrollingComponent() {
          return (
            /* binding */
            _ScrollingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/nav/nav.component */
      1541);
      /* harmony import */


      var _shared_step_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/step/step.component */
      253);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/card/card.component */
      3037);
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../ng-sortgrid/src/lib/ngsg-item.directive */
      1018);

      function ScrollingComponent_ngsg_card_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngsg-card", 6);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoScroll", true)("scrollPointTop", ctx_r0.height)("ngSortGridItems", ctx_r0.items)("item", item_r1);
        }
      }

      var _ScrollingComponent = /*#__PURE__*/function () {
        function _ScrollingComponent() {
          _classCallCheck(this, _ScrollingComponent);

          this.height = 350;
          this.items = Array.from(Array(50).keys());
        }

        _createClass(_ScrollingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ScrollingComponent;
      }();

      _ScrollingComponent.ɵfac = function ScrollingComponent_Factory(t) {
        return new (t || _ScrollingComponent)();
      };

      _ScrollingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ScrollingComponent,
        selectors: [["app-scrolling"]],
        decls: 8,
        vars: 3,
        consts: [["subtitle", "Scrolling demo", 3, "fixed", "height"], [1, "container", 2, "margin-top", "400px"], ["title", "Sample code to enable scrolling with a custom top scroll point.", "image", "scrolling-code.png"], ["title", "Scroll down to the bottom of the page, drag an item over the blue header (which is the top scroll point) and watch it scroll \uD83D\uDE0A"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", "class", "example-box", 3, "autoScroll", "scrollPointTop", "ngSortGridItems", "item", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", 1, "example-box", 3, "autoScroll", "scrollPointTop", "ngSortGridItems", "item"]],
        template: function ScrollingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngsg-demo-nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Scrolling");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngsg-demo-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ngsg-demo-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ScrollingComponent_ngsg_card_7_Template, 1, 4, "ngsg-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixed", true)("height", ctx.height + "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _shared_step_step_component__WEBPACK_IMPORTED_MODULE_1__.StepComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__.NgsgItemDirective],
        encapsulation: 2
      });
      /***/
    },

    /***/
    7722: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollingModule": function ScrollingModule() {
          return (
            /* binding */
            _ScrollingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../ng-sortgrid/src/lib/ngsg.module */
      3275);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      5786);
      /* harmony import */


      var _scrolling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scrolling.component */
      4304);
      /* harmony import */


      var _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scrolling.routing.module */
      4558);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ScrollingModule = function _ScrollingModule() {
        _classCallCheck(this, _ScrollingModule);
      };

      _ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
        return new (t || _ScrollingModule)();
      };

      _ScrollingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ScrollingModule
      });
      _ScrollingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_3__.ScrollingRoutingModule, _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_0__.NgsgModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ScrollingModule, {
          declarations: [_scrolling_component__WEBPACK_IMPORTED_MODULE_2__.ScrollingComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_3__.ScrollingRoutingModule, _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_0__.NgsgModule]
        });
      })();
      /***/

    },

    /***/
    4558: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollingRoutingModule": function ScrollingRoutingModule() {
          return (
            /* binding */
            _ScrollingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _scrolling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scrolling.component */
      4304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ScrollingRoutingModule = function _ScrollingRoutingModule() {
        _classCallCheck(this, _ScrollingRoutingModule);
      };

      _ScrollingRoutingModule.ɵfac = function ScrollingRoutingModule_Factory(t) {
        return new (t || _ScrollingRoutingModule)();
      };

      _ScrollingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ScrollingRoutingModule
      });
      _ScrollingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
          path: '',
          component: _scrolling_component__WEBPACK_IMPORTED_MODULE_0__.ScrollingComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ScrollingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects_ng-sortgrid-demo_src_app_scrolling_scrolling_module_ts-es5.js.map