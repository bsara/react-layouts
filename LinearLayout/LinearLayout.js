'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getClassName2 = require('babel-plugin-react-css-modules/dist/browser/getClassName');

var _getClassName3 = _interopRequireDefault(_getClassName2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./LinearLayout.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleModuleImportMap = {
  './LinearLayout.css': {
    'linear-layout': 'rl-d8af8a4c',
    'linear-layout-horizontal': 'rl-b6ac2d51',
    'linear-layout-vertical': 'rl-f1eedeb0'
  }
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * ISC License (ISC)
 *
 * Copyright (c) 2018, Brandon D. Sara (https://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

// eslint-disable-next-line react/require-optimization
var LinearLayout = function (_React$Component) {
  _inherits(LinearLayout, _React$Component);

  function LinearLayout() {
    _classCallCheck(this, LinearLayout);

    return _possibleConstructorReturn(this, (LinearLayout.__proto__ || Object.getPrototypeOf(LinearLayout)).apply(this, arguments));
  }

  _createClass(LinearLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          domRef = _props.domRef,
          direction = _props.direction;


      var elementProps = Object.assign({}, this.props);
      delete elementProps.domRef;
      delete elementProps.direction;

      var isDirectionVertical = direction === 'v' || direction === 'vert' || direction === 'vertical';

      return _react2.default.createElement(
        'div',
        _extends({}, elementProps, { ref: domRef, className: (className ? className + ' ' : '') + (0, _getClassName3.default)('linear-layout ' + (isDirectionVertical ? 'linear-layout-vertical' : 'linear-layout-horizontal'), _styleModuleImportMap)
        }),
        children
      );
    }
  }]);

  return LinearLayout;
}(_react2.default.Component);

exports.default = LinearLayout;


LinearLayout.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  style: _propTypes2.default.object,

  domRef: _propTypes2.default.func,
  direction: _propTypes2.default.oneOf(['h', 'horiz', 'horizontal', 'v', 'vert', 'vertical'])
};
//# sourceMappingURL=LinearLayout.js.map