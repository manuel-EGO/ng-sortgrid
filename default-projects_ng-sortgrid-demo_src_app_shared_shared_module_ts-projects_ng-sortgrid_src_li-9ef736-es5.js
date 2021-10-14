(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkng_sortgrid"] = self["webpackChunkng_sortgrid"] || []).push([["default-projects_ng-sortgrid-demo_src_app_shared_shared_module_ts-projects_ng-sortgrid_src_li-9ef736"], {
    /***/
    5979: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      };
      /***/

    },

    /***/
    2516: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fromEvent": function fromEvent() {
          return (
            /* binding */
            _fromEvent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      5160);
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isArray */
      9861);
      /* harmony import */


      var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isFunction */
      18);
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../operators/map */
      3927);

      var toString = function () {
        return Object.prototype.toString;
      }();

      function _fromEvent(target, eventName, options, resultSelector) {
        if ((0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
          resultSelector = options;
          options = undefined;
        }

        if (resultSelector) {
          return _fromEvent(target, eventName, options).pipe((0, _operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(function (args) {
            return (0, _util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
          }));
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          function handler(e) {
            if (arguments.length > 1) {
              subscriber.next(Array.prototype.slice.call(arguments));
            } else {
              subscriber.next(e);
            }
          }

          setupSubscription(target, eventName, handler, subscriber, options);
        });
      }

      function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;

        if (isEventTarget(sourceObj)) {
          var source = sourceObj;
          sourceObj.addEventListener(eventName, handler, options);

          unsubscribe = function unsubscribe() {
            return source.removeEventListener(eventName, handler, options);
          };
        } else if (isJQueryStyleEventEmitter(sourceObj)) {
          var _source = sourceObj;
          sourceObj.on(eventName, handler);

          unsubscribe = function unsubscribe() {
            return _source.off(eventName, handler);
          };
        } else if (isNodeStyleEventEmitter(sourceObj)) {
          var _source2 = sourceObj;
          sourceObj.addListener(eventName, handler);

          unsubscribe = function unsubscribe() {
            return _source2.removeListener(eventName, handler);
          };
        } else if (sourceObj && sourceObj.length) {
          for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
          }
        } else {
          throw new TypeError('Invalid event target');
        }

        subscriber.add(unsubscribe);
      }

      function isNodeStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
      }

      function isJQueryStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
      }

      function isEventTarget(sourceObj) {
        return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
      }
      /***/

    },

    /***/
    2702: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "timer": function timer() {
          return (
            /* binding */
            _timer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      5160);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduler/async */
      2606);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isNumeric */
      2867);
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isScheduler */
      6770);

      function _timer() {
        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        var period = -1;

        if ((0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if ((0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
          scheduler = periodOrScheduler;
        }

        if (!(0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          var due = (0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
          return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
          });
        });
      }

      function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);

        if (subscriber.closed) {
          return;
        } else if (period === -1) {
          return subscriber.complete();
        }

        state.index = index + 1;
        this.schedule(state, period);
      }
      /***/

    },

    /***/
    7202: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "mapTo": function mapTo() {
          return (
            /* binding */
            _mapTo
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      1003);

      function _mapTo(value) {
        return function (source) {
          return source.lift(new MapToOperator(value));
        };
      }

      var MapToOperator = /*#__PURE__*/function () {
        function MapToOperator(value) {
          _classCallCheck(this, MapToOperator);

          this.value = value;
        }

        _createClass(MapToOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new MapToSubscriber(subscriber, this.value));
          }
        }]);

        return MapToOperator;
      }();

      var MapToSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(MapToSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(MapToSubscriber);

        function MapToSubscriber(destination, value) {
          var _this;

          _classCallCheck(this, MapToSubscriber);

          _this = _super.call(this, destination);
          _this.value = value;
          return _this;
        }

        _createClass(MapToSubscriber, [{
          key: "_next",
          value: function _next(x) {
            this.destination.next(this.value);
          }
        }]);

        return MapToSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber);
      /***/

    },

    /***/
    2663: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "takeUntil": function takeUntil() {
          return (
            /* binding */
            _takeUntil
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../OuterSubscriber */
      8237);
      /* harmony import */


      var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/subscribeToResult */
      6648);

      function _takeUntil(notifier) {
        return function (source) {
          return source.lift(new TakeUntilOperator(notifier));
        };
      }

      var TakeUntilOperator = /*#__PURE__*/function () {
        function TakeUntilOperator(notifier) {
          _classCallCheck(this, TakeUntilOperator);

          this.notifier = notifier;
        }

        _createClass(TakeUntilOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            var notifierSubscription = (0, _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__.subscribeToResult)(takeUntilSubscriber, this.notifier);

            if (notifierSubscription && !takeUntilSubscriber.seenValue) {
              takeUntilSubscriber.add(notifierSubscription);
              return source.subscribe(takeUntilSubscriber);
            }

            return takeUntilSubscriber;
          }
        }]);

        return TakeUntilOperator;
      }();

      var TakeUntilSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB) {
        _inherits(TakeUntilSubscriber, _OuterSubscriber__WEB);

        var _super2 = _createSuper(TakeUntilSubscriber);

        function TakeUntilSubscriber(destination) {
          var _this2;

          _classCallCheck(this, TakeUntilSubscriber);

          _this2 = _super2.call(this, destination);
          _this2.seenValue = false;
          return _this2;
        }

        _createClass(TakeUntilSubscriber, [{
          key: "notifyNext",
          value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.seenValue = true;
            this.complete();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {}
        }]);

        return TakeUntilSubscriber;
      }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__.OuterSubscriber);
      /***/

    },

    /***/
    8511: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "takeWhile": function takeWhile() {
          return (
            /* binding */
            _takeWhile
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      1003);

      function _takeWhile(predicate) {
        var inclusive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return function (source) {
          return source.lift(new TakeWhileOperator(predicate, inclusive));
        };
      }

      var TakeWhileOperator = /*#__PURE__*/function () {
        function TakeWhileOperator(predicate, inclusive) {
          _classCallCheck(this, TakeWhileOperator);

          this.predicate = predicate;
          this.inclusive = inclusive;
        }

        _createClass(TakeWhileOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
          }
        }]);

        return TakeWhileOperator;
      }();

      var TakeWhileSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
        _inherits(TakeWhileSubscriber, _Subscriber__WEBPACK_2);

        var _super3 = _createSuper(TakeWhileSubscriber);

        function TakeWhileSubscriber(destination, predicate, inclusive) {
          var _this3;

          _classCallCheck(this, TakeWhileSubscriber);

          _this3 = _super3.call(this, destination);
          _this3.predicate = predicate;
          _this3.inclusive = inclusive;
          _this3.index = 0;
          return _this3;
        }

        _createClass(TakeWhileSubscriber, [{
          key: "_next",
          value: function _next(value) {
            var destination = this.destination;
            var result;

            try {
              result = this.predicate(value, this.index++);
            } catch (err) {
              destination.error(err);
              return;
            }

            this.nextOrComplete(value, result);
          }
        }, {
          key: "nextOrComplete",
          value: function nextOrComplete(value, predicateResult) {
            var destination = this.destination;

            if (Boolean(predicateResult)) {
              destination.next(value);
            } else {
              if (this.inclusive) {
                destination.next(value);
              }

              destination.complete();
            }
          }
        }]);

        return TakeWhileSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber);
      /***/

    },

    /***/
    2292: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "defaultThrottleConfig": function defaultThrottleConfig() {
          return (
            /* binding */
            _defaultThrottleConfig
          );
        },

        /* harmony export */
        "throttle": function throttle() {
          return (
            /* binding */
            _throttle
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../OuterSubscriber */
      8237);
      /* harmony import */


      var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeToResult */
      6648);

      var _defaultThrottleConfig = {
        leading: true,
        trailing: false
      };

      function _throttle(durationSelector) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultThrottleConfig;
        return function (source) {
          return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
        };
      }

      var ThrottleOperator = /*#__PURE__*/function () {
        function ThrottleOperator(durationSelector, leading, trailing) {
          _classCallCheck(this, ThrottleOperator);

          this.durationSelector = durationSelector;
          this.leading = leading;
          this.trailing = trailing;
        }

        _createClass(ThrottleOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
          }
        }]);

        return ThrottleOperator;
      }();

      var ThrottleSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB2) {
        _inherits(ThrottleSubscriber, _OuterSubscriber__WEB2);

        var _super4 = _createSuper(ThrottleSubscriber);

        function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
          var _this4;

          _classCallCheck(this, ThrottleSubscriber);

          _this4 = _super4.call(this, destination);
          _this4.destination = destination;
          _this4.durationSelector = durationSelector;
          _this4._leading = _leading;
          _this4._trailing = _trailing;
          _this4._hasValue = false;
          return _this4;
        }

        _createClass(ThrottleSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this._hasValue = true;
            this._sendValue = value;

            if (!this._throttled) {
              if (this._leading) {
                this.send();
              } else {
                this.throttle(value);
              }
            }
          }
        }, {
          key: "send",
          value: function send() {
            var _hasValue = this._hasValue,
                _sendValue = this._sendValue;

            if (_hasValue) {
              this.destination.next(_sendValue);
              this.throttle(_sendValue);
            }

            this._hasValue = false;
            this._sendValue = null;
          }
        }, {
          key: "throttle",
          value: function throttle(value) {
            var duration = this.tryDurationSelector(value);

            if (!!duration) {
              this.add(this._throttled = (0, _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, duration));
            }
          }
        }, {
          key: "tryDurationSelector",
          value: function tryDurationSelector(value) {
            try {
              return this.durationSelector(value);
            } catch (err) {
              this.destination.error(err);
              return null;
            }
          }
        }, {
          key: "throttlingDone",
          value: function throttlingDone() {
            var _throttled = this._throttled,
                _trailing = this._trailing;

            if (_throttled) {
              _throttled.unsubscribe();
            }

            this._throttled = null;

            if (_trailing) {
              this.send();
            }
          }
        }, {
          key: "notifyNext",
          value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.throttlingDone();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {
            this.throttlingDone();
          }
        }]);

        return ThrottleSubscriber;
      }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber);
      /***/

    },

    /***/
    9190: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throttleTime": function throttleTime() {
          return (
            /* binding */
            _throttleTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Subscriber */
      1003);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      2606);
      /* harmony import */


      var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./throttle */
      2292);

      function _throttleTime(duration) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _throttle__WEBPACK_IMPORTED_MODULE_1__.defaultThrottleConfig;
        return function (source) {
          return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
        };
      }

      var ThrottleTimeOperator = /*#__PURE__*/function () {
        function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
          _classCallCheck(this, ThrottleTimeOperator);

          this.duration = duration;
          this.scheduler = scheduler;
          this.leading = leading;
          this.trailing = trailing;
        }

        _createClass(ThrottleTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
          }
        }]);

        return ThrottleTimeOperator;
      }();

      var ThrottleTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_3) {
        _inherits(ThrottleTimeSubscriber, _Subscriber__WEBPACK_3);

        var _super5 = _createSuper(ThrottleTimeSubscriber);

        function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
          var _this5;

          _classCallCheck(this, ThrottleTimeSubscriber);

          _this5 = _super5.call(this, destination);
          _this5.duration = duration;
          _this5.scheduler = scheduler;
          _this5.leading = leading;
          _this5.trailing = trailing;
          _this5._hasTrailingValue = false;
          _this5._trailingValue = null;
          return _this5;
        }

        _createClass(ThrottleTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            if (this.throttled) {
              if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
              }
            } else {
              this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
                subscriber: this
              }));

              if (this.leading) {
                this.destination.next(value);
              } else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
              }
            }
          }
        }, {
          key: "_complete",
          value: function _complete() {
            if (this._hasTrailingValue) {
              this.destination.next(this._trailingValue);
              this.destination.complete();
            } else {
              this.destination.complete();
            }
          }
        }, {
          key: "clearThrottle",
          value: function clearThrottle() {
            var throttled = this.throttled;

            if (throttled) {
              if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
              }

              throttled.unsubscribe();
              this.remove(throttled);
              this.throttled = null;
            }
          }
        }]);

        return ThrottleTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber);

      function dispatchNext(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
      }
      /***/

    },

    /***/
    7163: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "withLatestFrom": function withLatestFrom() {
          return (
            /* binding */
            _withLatestFrom
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../OuterSubscriber */
      8237);
      /* harmony import */


      var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeToResult */
      6648);

      function _withLatestFrom() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return function (source) {
          var project;

          if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
          }

          var observables = args;
          return source.lift(new WithLatestFromOperator(observables, project));
        };
      }

      var WithLatestFromOperator = /*#__PURE__*/function () {
        function WithLatestFromOperator(observables, project) {
          _classCallCheck(this, WithLatestFromOperator);

          this.observables = observables;
          this.project = project;
        }

        _createClass(WithLatestFromOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
          }
        }]);

        return WithLatestFromOperator;
      }();

      var WithLatestFromSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB3) {
        _inherits(WithLatestFromSubscriber, _OuterSubscriber__WEB3);

        var _super6 = _createSuper(WithLatestFromSubscriber);

        function WithLatestFromSubscriber(destination, observables, project) {
          var _this6;

          _classCallCheck(this, WithLatestFromSubscriber);

          _this6 = _super6.call(this, destination);
          _this6.observables = observables;
          _this6.project = project;
          _this6.toRespond = [];
          var len = observables.length;
          _this6.values = new Array(len);

          for (var i = 0; i < len; i++) {
            _this6.toRespond.push(i);
          }

          for (var _i = 0; _i < len; _i++) {
            var observable = observables[_i];

            _this6.add((0, _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(_assertThisInitialized(_this6), observable, observable, _i));
          }

          return _this6;
        }

        _createClass(WithLatestFromSubscriber, [{
          key: "notifyNext",
          value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            var toRespond = this.toRespond;

            if (toRespond.length > 0) {
              var found = toRespond.indexOf(outerIndex);

              if (found !== -1) {
                toRespond.splice(found, 1);
              }
            }
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {}
        }, {
          key: "_next",
          value: function _next(value) {
            if (this.toRespond.length === 0) {
              var args = [value].concat(_toConsumableArray(this.values));

              if (this.project) {
                this._tryProject(args);
              } else {
                this.destination.next(args);
              }
            }
          }
        }, {
          key: "_tryProject",
          value: function _tryProject(args) {
            var result;

            try {
              result = this.project.apply(this, args);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            this.destination.next(result);
          }
        }]);

        return WithLatestFromSubscriber;
      }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber);
      /***/

    },

    /***/
    473: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      4283);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super7 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super7.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription);
      /***/

    },

    /***/
    3115: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      473);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super8 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this7;

          _classCallCheck(this, _AsyncAction);

          _this7 = _super8.call(this, scheduler, work);
          _this7.scheduler = scheduler;
          _this7.work = work;
          _this7.pending = false;
          return _this7;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action);
      /***/

    },

    /***/
    6367: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      5979);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super9 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this8;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this8 = _super9.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this8)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this8.actions = [];
          _this8.active = false;
          _this8.scheduled = undefined;
          return _this8;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler);
      /***/

    },

    /***/
    2606: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      3115);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      6367);

      var _async = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
      /***/

    },

    /***/
    2867: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      9861);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      }
      /***/

    },

    /***/
    3037: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardComponent": function CardComponent() {
          return (
            /* binding */
            _CardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CardComponent = function _CardComponent() {
        _classCallCheck(this, _CardComponent);
      };

      _CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || _CardComponent)();
      };

      _CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CardComponent,
        selectors: [["ngsg-card"]],
        inputs: {
          item: "item"
        },
        decls: 3,
        vars: 1,
        consts: [[2, "color", "darkslategray"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item, " ");
          }
        },
        styles: ["[_nghost-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  font-size: 30pt;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n  0 2px 2px 0 rgba(0, 0, 0, 0.14),\n  0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVEQUF1RDtFQUN2RDs7aUNBRStCO0FBQ2pDIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgY3Vyc29yOiBtb3ZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    5886: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HeaderComponent = function _HeaderComponent() {
        _classCallCheck(this, _HeaderComponent);
      };

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)();
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["ngsg-demo-header"]],
        decls: 8,
        vars: 0,
        consts: [[1, "header", "py-5", "mb-5"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-lg-12"], [1, "display-4", "text-white", "mt-5", "mb-2"], [1, "lead", "mb-5", "text-white"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Draggable sort grid with multiselction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Use the ngSortgridItem directive to turn your lists into a grid where single or even multiple files can be sorted via drag & drop.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  background: #c30230;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNjMzAyMzA7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    1541: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavComponent": function NavComponent() {
          return (
            /* binding */
            _NavComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function NavComponent_small_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "height": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "fixed-top": a0
        };
      };

      var _NavComponent = function _NavComponent() {
        _classCallCheck(this, _NavComponent);

        this.fixed = false;
        this.height = '140px';
      };

      _NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || _NavComponent)();
      };

      _NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NavComponent,
        selectors: [["ngsg-demo-nav"]],
        inputs: {
          fixed: "fixed",
          height: "height",
          subtitle: "subtitle"
        },
        decls: 15,
        vars: 7,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 3, "ngStyle", "ngClass"], [1, "container"], ["href", "#", 1, "navbar-brand", 2, "font-size", "30px"], ["src", "assets/ng-sortgrid-logo.png", 1, "logo"], ["class", "subtitle", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "https://twitter.com/kreuzercode", "target", "_blank", 1, "nav-link"], [1, "icon", "fab", "fa-twitter", "fa-2x"], [1, "nav-item"], ["href", "https://github.com/kreuzerk/ng-sortgrid", "target", "_blank", 1, "nav-link"], [1, "icon", "fab", "fa-github", "fa-2x"], [1, "subtitle"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_small_4_Template, 2, 1, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.height))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.fixed));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".navbar[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #c30230;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 250px;\n  height: 80px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: #c30230;\n  font-size: 40px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: darkgray;\n  display: block;\n  margin-left: 50px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzMwMjMwO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYzMwMjMwO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    5786: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./card/card.component */
      3037);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      5886);
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav/nav.component */
      1541);
      /* harmony import */


      var _step_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./step/step.component */
      253);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_step_step_component__WEBPACK_IMPORTED_MODULE_3__.StepComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
          exports: [_step_step_component__WEBPACK_IMPORTED_MODULE_3__.StepComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent]
        });
      })();
      /***/

    },

    /***/
    253: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepComponent": function StepComponent() {
          return (
            /* binding */
            _StepComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function StepComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _StepComponent = function _StepComponent() {
        _classCallCheck(this, _StepComponent);
      };

      _StepComponent.ɵfac = function StepComponent_Factory(t) {
        return new (t || _StepComponent)();
      };

      _StepComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _StepComponent,
        selectors: [["ngsg-demo-step"]],
        inputs: {
          title: "title",
          image: "image"
        },
        decls: 4,
        vars: 2,
        consts: [[1, "step-title"], ["class", "step-image", 3, "src", 4, "ngIf"], [1, "step-image", 3, "src"]],
        template: function StepComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepComponent_img_2_Template, 1, 1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".step-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.step-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3RlcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc3RlcC1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    9576: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgClassService": function NgsgClassService() {
          return (
            /* binding */
            _NgsgClassService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgsgClassService = /*#__PURE__*/function () {
        function _NgsgClassService() {
          _classCallCheck(this, _NgsgClassService);

          this.SELECTED_DEFAULT_CLASS = 'ng-sg-selected';
          this.PLACEHOLDER_DEFAULT_CLASS = 'ng-sg-placeholder';
          this.DROPPED_DEFAULT_CLASS = 'ng-sg-dropped';
          this.ACTIVE_DEFAULT_CLASS = 'ng-sg-active';
        }

        _createClass(_NgsgClassService, [{
          key: "addPlaceHolderClass",
          value: function addPlaceHolderClass(element) {
            element.classList.add(this.PLACEHOLDER_DEFAULT_CLASS);
          }
        }, {
          key: "removePlaceHolderClass",
          value: function removePlaceHolderClass(element) {
            element.classList.remove(this.PLACEHOLDER_DEFAULT_CLASS);
          }
        }, {
          key: "addDroppedClass",
          value: function addDroppedClass(element) {
            element.classList.add(this.DROPPED_DEFAULT_CLASS);
          }
        }, {
          key: "removeDroppedClass",
          value: function removeDroppedClass(element) {
            element.classList.remove(this.DROPPED_DEFAULT_CLASS);
          }
        }, {
          key: "addSelectedClass",
          value: function addSelectedClass(element) {
            element.classList.add(this.SELECTED_DEFAULT_CLASS);
          }
        }, {
          key: "removeSelectedClass",
          value: function removeSelectedClass(element) {
            element.classList.remove(this.SELECTED_DEFAULT_CLASS);
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            element.classList.add(this.ACTIVE_DEFAULT_CLASS);
          }
        }, {
          key: "removeActiveClass",
          value: function removeActiveClass(element) {
            element.classList.remove(this.ACTIVE_DEFAULT_CLASS);
          }
        }]);

        return _NgsgClassService;
      }();

      _NgsgClassService.ɵfac = function NgsgClassService_Factory(t) {
        return new (t || _NgsgClassService)();
      };

      _NgsgClassService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NgsgClassService,
        factory: _NgsgClassService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6878: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgElementsHelper": function NgsgElementsHelper() {
          return (
            /* binding */
            _NgsgElementsHelper
          );
        }
        /* harmony export */

      });

      var _NgsgElementsHelper = /*#__PURE__*/function () {
        function _NgsgElementsHelper() {
          _classCallCheck(this, _NgsgElementsHelper);
        }

        _createClass(_NgsgElementsHelper, null, [{
          key: "findIndex",
          value: function findIndex(element) {
            var allElements = element.parentNode.children;
            return Array.prototype.indexOf.call(allElements, element);
          }
        }]);

        return _NgsgElementsHelper;
      }();
      /***/

    },

    /***/
    4279: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollHelperService": function ScrollHelperService() {
          return (
            /* binding */
            _ScrollHelperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ScrollHelperService = /*#__PURE__*/function () {
        function _ScrollHelperService(document) {
          _classCallCheck(this, _ScrollHelperService);

          this.document = document;
          this.DEFAULT_SCROLLSPEED = 50;
          this.SCROLL_BUFFER = 50;
          this.window = document.defaultView;
        }

        _createClass(_ScrollHelperService, [{
          key: "scrollIfNecessary",
          value: function scrollIfNecessary(event) {
            var scrollPoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var scrollSpeed = arguments.length > 2 ? arguments[2] : undefined;
            var currentPosition = event.pageY - this.window.scrollY;

            if (this.isTopScrollNeeded(currentPosition, scrollPoints.top)) {
              this.window.scrollBy({
                top: -scrollSpeed || -this.DEFAULT_SCROLLSPEED,
                behavior: 'smooth'
              });
              return;
            }

            if (this.isBottomScrollNeeded(currentPosition, scrollPoints.bottom)) {
              this.window.scrollBy({
                top: scrollSpeed || this.DEFAULT_SCROLLSPEED,
                behavior: 'smooth'
              });
            }
          }
        }, {
          key: "isTopScrollNeeded",
          value: function isTopScrollNeeded(currentPosition, scrollPointTop) {
            return scrollPointTop ? currentPosition < scrollPointTop : currentPosition < this.SCROLL_BUFFER;
          }
        }, {
          key: "isBottomScrollNeeded",
          value: function isBottomScrollNeeded(currentPosition, scrollPointBottom) {
            return scrollPointBottom ? currentPosition > scrollPointBottom : currentPosition > this.window.innerHeight - this.SCROLL_BUFFER;
          }
        }]);

        return _ScrollHelperService;
      }();

      _ScrollHelperService.ɵfac = function ScrollHelperService_Factory(t) {
        return new (t || _ScrollHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _ScrollHelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ScrollHelperService,
        factory: _ScrollHelperService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1683: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgSelectionService": function NgsgSelectionService() {
          return (
            /* binding */
            _NgsgSelectionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      2516);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      9919);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      7163);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      7202);
      /* harmony import */


      var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../helpers/element/ngsg-elements.helper */
      6878);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../helpers/class/ngsg-class.service */
      9576);
      /* harmony import */


      var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../store/ngsg-store.service */
      1152);

      var ChangeAction;

      (function (ChangeAction) {
        ChangeAction[ChangeAction["ADD"] = 0] = "ADD";
        ChangeAction[ChangeAction["REMOVE"] = 1] = "REMOVE";
      })(ChangeAction || (ChangeAction = {}));

      var _NgsgSelectionService = /*#__PURE__*/function () {
        function _NgsgSelectionService(classService, ngsgStore) {
          var _this9 = this;

          _classCallCheck(this, _NgsgSelectionService);

          this.classService = classService;
          this.ngsgStore = ngsgStore;
          this.COMMAND_KEY = 'Meta';
          this.CONTROL_KEY = 'Control';
          this.selectionChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          var selectionKeyPressed$ = this.selectionKeyPressed();
          this.selectionChange$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(selectionKeyPressed$)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                selectionChange = _ref2[0],
                selectionKeyPressed = _ref2[1];

            selectionKeyPressed ? _this9.handleSelectionChange(selectionChange) : _this9.resetSelectedItems(selectionChange.key);
          });
        }

        _createClass(_NgsgSelectionService, [{
          key: "resetSelectedItems",
          value: function resetSelectedItems(group) {
            var _this10 = this;

            this.ngsgStore.getSelectedItems(group).forEach(function (item) {
              return _this10.classService.removeSelectedClass(item.node);
            });
            this.ngsgStore.resetSelectedItems(group);
          }
        }, {
          key: "handleSelectionChange",
          value: function handleSelectionChange(selectionChange) {
            if (selectionChange.action === ChangeAction.ADD) {
              this.classService.addSelectedClass(selectionChange.item);
              this.ngsgStore.addSelectedItem(selectionChange.key, {
                node: selectionChange.item,
                originalIndex: _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(selectionChange.item)
              });
            }

            if (selectionChange.action === ChangeAction.REMOVE) {
              this.classService.removeSelectedClass(selectionChange.item);
              this.ngsgStore.removeSelectedItem(selectionChange.key, selectionChange.item);
            }
          }
        }, {
          key: "selectionKeyPressed",
          value: function selectionKeyPressed() {
            var _this11 = this;

            var selectionKeyPressed = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'keydown').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (keyboardEvent) {
              return keyboardEvent.key === _this11.COMMAND_KEY || keyboardEvent.key === _this11.CONTROL_KEY;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(true));
            var keyup = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'keyup').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(false));
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(selectionKeyPressed, keyup);
          }
        }, {
          key: "selectElementIfNoSelection",
          value: function selectElementIfNoSelection(group, dragedElement) {
            if (this.ngsgStore.hasSelectedItems(group)) {
              return;
            }

            this.ngsgStore.addSelectedItem(group, {
              node: dragedElement,
              originalIndex: _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(dragedElement)
            });
          }
        }, {
          key: "updateSelectedDragItem",
          value: function updateSelectedDragItem(key, item, selected) {
            this.selectionChange$.next({
              key: key,
              item: item,
              action: selected ? ChangeAction.ADD : ChangeAction.REMOVE
            });
          }
        }]);

        return _NgsgSelectionService;
      }();

      _NgsgSelectionService.ɵfac = function NgsgSelectionService_Factory(t) {
        return new (t || _NgsgSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_1__.NgsgClassService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__.NgsgStoreService));
      };

      _NgsgSelectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: _NgsgSelectionService,
        factory: _NgsgSelectionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8549: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgDragHandleDirective": function NgsgDragHandleDirective() {
          return (
            /* binding */
            _NgsgDragHandleDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgsgDragHandleDirective = function _NgsgDragHandleDirective(el) {
        _classCallCheck(this, _NgsgDragHandleDirective);

        this.el = el;
      };

      _NgsgDragHandleDirective.ɵfac = function NgsgDragHandleDirective_Factory(t) {
        return new (t || _NgsgDragHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _NgsgDragHandleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgsgDragHandleDirective,
        selectors: [["", "ngSortgridDragHandle", ""]]
      });
      /***/
    },

    /***/
    1018: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgItemDirective": function NgsgItemDirective() {
          return (
            /* binding */
            _NgsgItemDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      2516);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      2663);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      9190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      8511);
      /* harmony import */


      var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers/element/ngsg-elements.helper */
      6878);
      /* harmony import */


      var _ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngsg-drag-handle.directive */
      8549);
      /* harmony import */


      var _sort_sort_ngsg_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sort/sort/ngsg-sort.service */
      4891);
      /* harmony import */


      var _mutliselect_ngsg_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mutliselect/ngsg-selection.service */
      1683);
      /* harmony import */


      var _sort_reflection_ngsg_reflect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sort/reflection/ngsg-reflect.service */
      3131);
      /* harmony import */


      var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./store/ngsg-store.service */
      1152);
      /* harmony import */


      var _shared_ngsg_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/ngsg-events.service */
      1602);
      /* harmony import */


      var _helpers_scroll_scroll_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./helpers/scroll/scroll-helper.service */
      4279);
      /* harmony import */


      var _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./helpers/class/ngsg-class.service */
      9576);

      var selector = '[ngSortgridItem]';

      var _NgsgItemDirective = /*#__PURE__*/function () {
        function _NgsgItemDirective(el, sortService, selectionService, reflectService, ngsgStore, ngsgEventService, scrollHelperService, classService) {
          _classCallCheck(this, _NgsgItemDirective);

          this.el = el;
          this.sortService = sortService;
          this.selectionService = selectionService;
          this.reflectService = reflectService;
          this.ngsgStore = ngsgStore;
          this.ngsgEventService = ngsgEventService;
          this.scrollHelperService = scrollHelperService;
          this.classService = classService;
          this.ngSortGridGroup = 'defaultGroup';
          this.autoScroll = false;
          this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
          this.selected = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        }

        _createClass(_NgsgItemDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.ngsgEventService.dropped$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(function () {
              return _this12.selected = false;
            });
            (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this.el.nativeElement, 'drag').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.throttleTime)(20), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(function () {
              return _this12.autoScroll;
            })).subscribe(function () {
              _this12.scrollHelperService.scrollIfNecessary(event, {
                top: _this12.scrollPointTop,
                bottom: _this12.scrollPointBottom
              }, _this12.scrollSpeed);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var sortGridItemChanges = changes.ngSortGridItems;
            var sortGridItems = sortGridItemChanges.currentValue ? sortGridItemChanges.currentValue : [];

            if (!this.ngsgStore.hasGroup(this.ngSortGridGroup)) {
              this.ngsgStore.initState(this.ngSortGridGroup, sortGridItems);
              return;
            }

            this.ngsgStore.setItems(this.ngSortGridGroup, sortGridItems);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this13 = this;

            var _a, _b;

            this.handleElement = ((_b = (_a = this.handle) === null || _a === void 0 ? void 0 : _a.el) === null || _b === void 0 ? void 0 : _b.nativeElement) || this.el.nativeElement;
            (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this.handleElement, 'mousedown').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(function () {
              _this13.el.nativeElement.draggable = true;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "dragStart",
          value: function dragStart(event) {
            if (!this.occuredOnHost(event)) {
              return;
            }

            this.selectionService.selectElementIfNoSelection(this.ngSortGridGroup, event.target);
            this.classService.addActiveClass(event.target);
            this.sortService.initSort(this.ngSortGridGroup);
          }
        }, {
          key: "dragEnter",
          value: function dragEnter() {
            if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
              return;
            }

            this.sortService.sort(this.el.nativeElement);
          }
        }, {
          key: "dragOver",
          value: function dragOver(event) {
            if (event.preventDefault) {
              // Necessary. Allows us to drop.
              event.preventDefault();
            }

            return false;
          }
        }, {
          key: "drop",
          value: function drop() {
            this.el.nativeElement.draggable = false;

            if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
              return;
            }

            if (!this.ngsgStore.hasItems(this.ngSortGridGroup)) {
              console.warn("Ng-sortgrid: No items provided - please use [sortGridItems] to pass in an array of items -\n      otherwhise the ordered items can not be emitted in the (sorted) event");
              return;
            }

            var previousOrder = _toConsumableArray(this.ngsgStore.getItems(this.ngSortGridGroup));

            this.sortService.endSort();
            var currentOrder = this.reflectService.reflectChanges(this.ngSortGridGroup, this.el.nativeElement);
            this.sorted.next({
              previousOrder: previousOrder,
              currentOrder: currentOrder
            });
            this.ngsgStore.resetSelectedItems(this.ngSortGridGroup);
            this.ngsgEventService.dropped$.next();
          }
        }, {
          key: "clicked",
          value: function clicked() {
            this.selected = !this.isItemCurrentlySelected();
            this.selectionService.updateSelectedDragItem(this.ngSortGridGroup, this.el.nativeElement, this.selected);
          }
        }, {
          key: "isItemCurrentlySelected",
          value: function isItemCurrentlySelected() {
            var index = _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(this.el.nativeElement);

            return !!this.ngsgStore.getSelectedItems(this.ngSortGridGroup).find(function (element) {
              return element.originalIndex === index;
            });
          }
        }, {
          key: "occuredOnHost",
          value: function occuredOnHost(event) {
            return event.target.matches(selector);
          }
        }]);

        return _NgsgItemDirective;
      }();

      _NgsgItemDirective.ɵfac = function NgsgItemDirective_Factory(t) {
        return new (t || _NgsgItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sort_sort_ngsg_sort_service__WEBPACK_IMPORTED_MODULE_2__.NgsgSortService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_mutliselect_ngsg_selection_service__WEBPACK_IMPORTED_MODULE_3__.NgsgSelectionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sort_reflection_ngsg_reflect_service__WEBPACK_IMPORTED_MODULE_4__.NgsgReflectService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_5__.NgsgStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_ngsg_events_service__WEBPACK_IMPORTED_MODULE_6__.NgsgEventsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_helpers_scroll_scroll_helper_service__WEBPACK_IMPORTED_MODULE_7__.ScrollHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_8__.NgsgClassService));
      };

      _NgsgItemDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
        type: _NgsgItemDirective,
        selectors: [["", "ngSortgridItem", ""]],
        contentQueries: function NgsgItemDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgDragHandleDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.handle = _t.first);
          }
        },
        hostBindings: function NgsgItemDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragstart", function NgsgItemDirective_dragstart_HostBindingHandler($event) {
              return ctx.dragStart($event);
            })("dragenter", function NgsgItemDirective_dragenter_HostBindingHandler() {
              return ctx.dragEnter();
            })("dragover", function NgsgItemDirective_dragover_HostBindingHandler($event) {
              return ctx.dragOver($event);
            })("dragend", function NgsgItemDirective_dragend_HostBindingHandler() {
              return ctx.drop();
            })("click", function NgsgItemDirective_click_HostBindingHandler() {
              return ctx.clicked();
            });
          }
        },
        inputs: {
          ngSortGridGroup: "ngSortGridGroup",
          ngSortGridItems: "ngSortGridItems",
          scrollPointTop: "scrollPointTop",
          scrollPointBottom: "scrollPointBottom",
          scrollSpeed: "scrollSpeed",
          autoScroll: "autoScroll"
        },
        outputs: {
          sorted: "sorted"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
      });
      /***/
    },

    /***/
    3275: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgModule": function NgsgModule() {
          return (
            /* binding */
            _NgsgModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngsg_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ngsg-item.directive */
      1018);
      /* harmony import */


      var _ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngsg-drag-handle.directive */
      8549);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgsgModule = function _NgsgModule() {
        _classCallCheck(this, _NgsgModule);
      };

      _NgsgModule.ɵfac = function NgsgModule_Factory(t) {
        return new (t || _NgsgModule)();
      };

      _NgsgModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _NgsgModule
      });
      _NgsgModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_NgsgModule, {
          declarations: [_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_0__.NgsgItemDirective, _ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgDragHandleDirective],
          exports: [_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_0__.NgsgItemDirective, _ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgDragHandleDirective]
        });
      })();
      /***/

    },

    /***/
    1602: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgEventsService": function NgsgEventsService() {
          return (
            /* binding */
            _NgsgEventsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgsgEventsService = function _NgsgEventsService() {
        _classCallCheck(this, _NgsgEventsService);

        this.dropped$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      };

      _NgsgEventsService.ɵfac = function NgsgEventsService_Factory(t) {
        return new (t || _NgsgEventsService)();
      };

      _NgsgEventsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _NgsgEventsService,
        factory: _NgsgEventsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3131: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgReflectService": function NgsgReflectService() {
          return (
            /* binding */
            _NgsgReflectService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../helpers/element/ngsg-elements.helper */
      6878);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/ngsg-store.service */
      1152);

      var _NgsgReflectService = /*#__PURE__*/function () {
        function _NgsgReflectService(ngsgStore) {
          _classCallCheck(this, _NgsgReflectService);

          this.ngsgStore = ngsgStore;
        }

        _createClass(_NgsgReflectService, [{
          key: "reflectChanges",
          value: function reflectChanges(key, element) {
            var items = this.ngsgStore.getItems(key);
            var selectedElements = this.ngsgStore.getSelectedItems(key);
            var selectedElementIndices = this.getSelectedElementsIndices(selectedElements);
            var selectedItems = this.getSelectedItems(items, selectedElementIndices);
            var sortedIndices = selectedElementIndices.sort();
            var dropIndex = this.findDropIndex(selectedElements, element);

            while (sortedIndices.length > 0) {
              items.splice(sortedIndices.pop(), 1);
            }

            var result = this.getReflectedItems(items, selectedItems, dropIndex);
            this.ngsgStore.setItems(key, result);
            return result;
          }
        }, {
          key: "getReflectedItems",
          value: function getReflectedItems(items, selectedItems, dropIndex) {
            var beforeSelection = items.slice(0, dropIndex);
            var afterSelection = items.slice(dropIndex, items.length);
            return [].concat(_toConsumableArray(beforeSelection), _toConsumableArray(selectedItems), _toConsumableArray(afterSelection));
          }
        }, {
          key: "getSelectedItems",
          value: function getSelectedItems(items, selectedElementIndexes) {
            var selectedItems = [];
            selectedElementIndexes.forEach(function (index) {
              selectedItems.push(items[index]);
            });
            return selectedItems;
          }
        }, {
          key: "getSelectedElementsIndices",
          value: function getSelectedElementsIndices(selectedElements) {
            return selectedElements.map(function (selectedElement) {
              return selectedElement.originalIndex;
            });
          }
        }, {
          key: "findDropIndex",
          value: function findDropIndex(selectedElements, element) {
            if (this.isDropInSelection(selectedElements, element)) {
              return _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(selectedElements[0].node);
            }

            return _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(element);
          }
        }, {
          key: "isDropInSelection",
          value: function isDropInSelection(collection, dropElement) {
            return !!collection.find(function (dragElment) {
              return dragElment.node === dropElement;
            });
          }
        }]);

        return _NgsgReflectService;
      }();

      _NgsgReflectService.ɵfac = function NgsgReflectService_Factory(t) {
        return new (t || _NgsgReflectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_1__.NgsgStoreService));
      };

      _NgsgReflectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _NgsgReflectService,
        factory: _NgsgReflectService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4891: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgSortService": function NgsgSortService() {
          return (
            /* binding */
            _NgsgSortService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      2702);
      /* harmony import */


      var _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../helpers/element/ngsg-elements.helper */
      6878);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../helpers/class/ngsg-class.service */
      9576);
      /* harmony import */


      var _store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../store/ngsg-store.service */
      1152);

      var _NgsgSortService = /*#__PURE__*/function () {
        function _NgsgSortService(classService, ngsgStore) {
          _classCallCheck(this, _NgsgSortService);

          this.classService = classService;
          this.ngsgStore = ngsgStore;
        }

        _createClass(_NgsgSortService, [{
          key: "initSort",
          value: function initSort(group) {
            this.dragIndex = this.ngsgStore.getFirstSelectItem(group).originalIndex;
            this.dragElements = this.ngsgStore.getSelectedItems(group);
          }
        }, {
          key: "sort",
          value: function sort(dropElement) {
            var _this14 = this;

            var hoverIndex = _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(dropElement);

            var el = this.getSibling(dropElement, this.dragIndex, hoverIndex);

            if (this.isDropInSelection(el)) {
              return;
            }

            this.dragElements.forEach(function (dragElement) {
              var insertedNode = dropElement.parentNode.insertBefore(dragElement.node, el.node);

              _this14.classService.addPlaceHolderClass(insertedNode);
            });
            this.dragIndex = _helpers_element_ngsg_elements_helper__WEBPACK_IMPORTED_MODULE_0__.NgsgElementsHelper.findIndex(this.dragElements[0].node);
          }
        }, {
          key: "endSort",
          value: function endSort() {
            var _this15 = this;

            this.dragElements.forEach(function (dragElement) {
              _this15.updateDropedItem(dragElement.node);
            });
          }
        }, {
          key: "getSibling",
          value: function getSibling(dropElement, dragIndex, hoverIndex) {
            if (dragIndex < hoverIndex) {
              return {
                node: dropElement.nextSibling,
                originalIndex: hoverIndex + 1
              };
            }

            return {
              node: dropElement,
              originalIndex: hoverIndex
            };
          }
        }, {
          key: "isDropInSelection",
          value: function isDropInSelection(dropElement) {
            return !!this.dragElements.find(function (dragElment) {
              return dragElment.node === dropElement.node;
            });
          }
        }, {
          key: "updateDropedItem",
          value: function updateDropedItem(item) {
            var _this16 = this;

            this.classService.removePlaceHolderClass(item);
            this.classService.addDroppedClass(item);
            this.classService.removeSelectedClass(item);
            this.classService.removeActiveClass(item);
            (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(500).subscribe(function () {
              return _this16.classService.removeDroppedClass(item);
            });
          }
        }]);

        return _NgsgSortService;
      }();

      _NgsgSortService.ɵfac = function NgsgSortService_Factory(t) {
        return new (t || _NgsgSortService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_helpers_class_ngsg_class_service__WEBPACK_IMPORTED_MODULE_1__.NgsgClassService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_store_ngsg_store_service__WEBPACK_IMPORTED_MODULE_2__.NgsgStoreService));
      };

      _NgsgSortService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _NgsgSortService,
        factory: _NgsgSortService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1152: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgsgStoreService": function NgsgStoreService() {
          return (
            /* binding */
            _NgsgStoreService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgsgStoreService = /*#__PURE__*/function () {
        function _NgsgStoreService() {
          _classCallCheck(this, _NgsgStoreService);

          this.state = new Map();
        }

        _createClass(_NgsgStoreService, [{
          key: "initState",
          value: function initState(group) {
            var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            this.state.set(group, {
              items: _toConsumableArray(items),
              classes: classes,
              selectedItems: []
            });
          }
        }, {
          key: "addSelectedItem",
          value: function addSelectedItem(group, dragElement) {
            this.state.get(group).selectedItems.push(dragElement);
          }
        }, {
          key: "removeSelectedItem",
          value: function removeSelectedItem(group, item) {
            var updatedItems = this.state.get(group).selectedItems.filter(function (dragElement) {
              return dragElement.node !== item;
            });
            this.setSelectedItems(group, updatedItems);
          }
        }, {
          key: "setItems",
          value: function setItems(group, items) {
            this.state.get(group).items = _toConsumableArray(items);
          }
        }, {
          key: "getItems",
          value: function getItems(group) {
            return this.state.get(group).items;
          }
        }, {
          key: "hasItems",
          value: function hasItems(group) {
            return this.getItems(group).length > 0;
          }
        }, {
          key: "hasGroup",
          value: function hasGroup(group) {
            return this.state.has(group);
          }
        }, {
          key: "getSelectedItems",
          value: function getSelectedItems(group) {
            return this.state.get(group).selectedItems;
          }
        }, {
          key: "setSelectedItems",
          value: function setSelectedItems(group, selectedItems) {
            this.state.get(group).selectedItems = _toConsumableArray(selectedItems);
          }
        }, {
          key: "getFirstSelectItem",
          value: function getFirstSelectItem(group) {
            return this.state.get(group).selectedItems[0];
          }
        }, {
          key: "hasSelectedItems",
          value: function hasSelectedItems(group) {
            return this.getSelectedItems(group).length > 0;
          }
        }, {
          key: "resetSelectedItems",
          value: function resetSelectedItems(group) {
            this.setSelectedItems(group, []);
          }
        }, {
          key: "getClasses",
          value: function getClasses(group) {
            return this.state.get(group).classes;
          }
        }]);

        return _NgsgStoreService;
      }();

      _NgsgStoreService.ɵfac = function NgsgStoreService_Factory(t) {
        return new (t || _NgsgStoreService)();
      };

      _NgsgStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NgsgStoreService,
        factory: _NgsgStoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-projects_ng-sortgrid-demo_src_app_shared_shared_module_ts-projects_ng-sortgrid_src_li-9ef736-es5.js.map