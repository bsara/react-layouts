'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _randomatic = require('randomatic');

var _randomatic2 = _interopRequireDefault(_randomatic);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * ISC License (ISC)
 *
 * Copyright (c) 2017, Brandon D. Sara (https://bsara.pro/)
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

var classNameUniquePart = (0, _randomatic2.default)('aA', 6);
var horizontalClassName = 'horizontal-' + classNameUniquePart;
var verticalClassName = 'vertical-' + classNameUniquePart;

var LinearLayoutDiv = _styledComponents2.default.div(['display:flex;flex-wrap:nowrap;justify-content:var(--item-alignment,flex-start);> *{flex-grow:var(--stretch-items,0);}&.', '{flex-direction:row;> *{width:var(--item-size);min-width:var(--item-min-size);max-width:var(--item-max-size);&:not(:last-child){border-right:var(--item-separator,none);}}}&.', '{flex-direction:column;> *{height:var(--item-size);min-height:var(--item-min-size);max-height:var(--item-max-size);&:not(:last-child){border-bottom:var(--item-separator,none);}}}'], horizontalClassName, verticalClassName);

// eslint-disable-next-line react/require-optimization

var LinearLayout = function (_React$PureComponent) {
  _inherits(LinearLayout, _React$PureComponent);

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


      var directionClassName = direction === 'v' || direction === 'vert' || direction === 'vertical' ? verticalClassName : horizontalClassName;

      return _react2.default.createElement(
        LinearLayoutDiv,
        _extends({}, this.props, { className: (0, _classnames2.default)(directionClassName, className), innerRef: domRef }),
        children
      );
    }
  }]);

  return LinearLayout;
}(_react2.default.PureComponent);

exports.default = LinearLayout;


LinearLayout.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  style: _propTypes2.default.object,

  domRef: _propTypes2.default.func,
  direction: _propTypes2.default.oneOf(['h', 'horiz', 'horizontal', 'v', 'vert', 'vertical'])
};