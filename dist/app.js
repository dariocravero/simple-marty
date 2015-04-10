(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.App = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _actionCreator$container$context$Marty$store = require('./marty');

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var App = (function (_Marty) {
  function App() {
    _classCallCheck(this, App);

    if (_Marty != null) {
      _Marty.apply(this, arguments);
    }
  }

  _inherits(App, _Marty);

  _createClass(App, [{
    key: 'toString',

    // static create = [
    //   ActionCreatorFoo,
    //   [StoreFoo, {some: 'option'}],
    //   ContainerFoo
    // ]

    value: function toString() {
      return 'App';
    }
  }], [{
    key: 'use',
    enumerable: true,
    value: [_actionCreator$container$context$Marty$store.actionCreator, _actionCreator$container$context$Marty$store.container, _actionCreator$container$context$Marty$store.context, _actionCreator$container$context$Marty$store.store]
  }]);

  return App;
})(_actionCreator$container$context$Marty$store.Marty);

exports.App = App;

var app = new App();

var View = (function (_React$Component) {
  function View() {
    _classCallCheck(this, View);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(View, _React$Component);

  _createClass(View, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        'div',
        null,
        _React2['default'].createElement(
          'h1',
          null,
          'view'
        ),
        _React2['default'].createElement(
          'div',
          null,
          'some: ',
          this.props.some
        ),
        _React2['default'].createElement(
          'div',
          null,
          'app: ',
          this.context.app.toString()
        )
      );
    }
  }]);

  return View;
})(_React2['default'].Component);

exports.View = View;

View.contextTypes = {
  app: _React2['default'].PropTypes.instanceOf(_actionCreator$container$context$Marty$store.Marty)
};

var Context = app.createContext(View);
exports.Context = Context;

_React2['default'].render(_React2['default'].createElement(Context, { some: 'value' }), document.getElementById('playground-container'));

},{"./marty":6,"react":undefined}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createActionCreator;

function createActionCreator() {}

module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createContainer;

function createContainer(component) {}

module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createContext;

var _Marty = require('./core');

var _Marty2 = _interopRequireWildcard(_Marty);

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

function createContext(Component) {
  var app = this;

  var Context = (function (_React$Component) {
    function Context(props) {
      _classCallCheck(this, Context);

      _get(Object.getPrototypeOf(Context.prototype), 'constructor', this).call(this, props);

      this.displayName = '' + Component.displayName + 'Context';
    }

    _inherits(Context, _React$Component);

    _createClass(Context, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          app: app
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _React2['default'].createElement(Component, this.props);
      }
    }]);

    return Context;
  })(_React2['default'].Component);

  Context.childContextTypes = {
    app: _React2['default'].PropTypes.instanceOf(_Marty2['default'])
  };

  return Context;
}

module.exports = exports['default'];

},{"./core":5,"react":undefined}],5:[function(require,module,exports){
'use strict';

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Dispatcher = require('flux');

var Marty = (function () {
  function Marty() {
    var _this = this;

    _classCallCheck(this, Marty);

    this.modules = Object.create(null);

    this.constructor.use.forEach(function (feature) {
      return use.call(_this, feature);
    });
    this.dispatcher = new _Dispatcher.Dispatcher();
    this.constructor.create.forEach(function (module) {
      return create.call(_this, module);
    });
  }

  _createClass(Marty, null, [{
    key: 'use',
    enumerable: true,
    value: []
  }, {
    key: 'create',
    enumerable: true,
    value: []
  }]);

  return Marty;
})();

exports['default'] = Marty;

function getName(from) {
  return from.name || from.constructor.name;
}

// Features supported by this Marty app
// e.g.: it supports Stores
function use(feature) {
  Object.defineProperty(this, getName(feature), { value: feature });
}

// Modules registered within the current app
// e.g.: it registers StoreFoo
function create(Module) {
  var options = Object.create(null);

  if (Array.isArray(Module)) {
    var _concat = [].concat(_toConsumableArray(Module));

    var _concat2 = _slicedToArray(_concat, 2);

    Module = _concat2[0];
    options = _concat2[1];
  }

  var name = getName(Module);
  this.modules[name] = new Module(options);
  Object.defineProperty(this, module, { value: this.modules[name] });
}
module.exports = exports['default'];

},{"flux":undefined}],6:[function(require,module,exports){
'use strict';

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _actionCreator2 = require('./action-creator');

var _actionCreator3 = _interopRequireWildcard(_actionCreator2);

exports.actionCreator = _actionCreator3['default'];

var _container2 = require('./container');

var _container3 = _interopRequireWildcard(_container2);

exports.container = _container3['default'];

var _context2 = require('./context');

var _context3 = _interopRequireWildcard(_context2);

exports.context = _context3['default'];

var _default = require('./core');

exports.Marty = _interopRequire(_default);

var _stateSource2 = require('./state-source');

var _stateSource3 = _interopRequireWildcard(_stateSource2);

exports.stateSource = _stateSource3['default'];

var _store2 = require('./store');

var _store3 = _interopRequireWildcard(_store2);

exports.store = _store3['default'];

},{"./action-creator":2,"./container":3,"./context":4,"./core":5,"./state-source":7,"./store":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createStateSource;

function createStateSource() {}

module.exports = exports["default"];

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createStore;

function createStore() {}

module.exports = exports["default"];

},{}]},{},[1])(1)
});