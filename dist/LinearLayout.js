'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinearLayout;

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

var horizontalClassName = (0, _randomatic2.default)('aA', 6);
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

var verticalClassName = (0, _randomatic2.default)('aA', 6);

var LinearLayoutDiv = _styledComponents2.default.div.withConfig({
  displayName: 'LinearLayout__LinearLayoutDiv'
})(['display:flex;flex-wrap:nowrap;justify-content:var(--item-alignment,flex-start);> *{flex-grow:var(--stretch-items,0);}&.', '{flex-direction:row;> *{width:var(--item-size);min-width:var(--item-min-size);max-width:var(--item-max-size);&:not(:last-child){border-right:var(--item-separator,none);}}}&.', '{flex-direction:column;> *{height:var(--item-size);min-height:var(--item-min-size);max-height:var(--item-max-size);&:not(:last-child){border-bottom:var(--item-separator,none);}}}'], horizontalClassName, verticalClassName);

function LinearLayout(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      direction = _ref.direction;

  var directionClassName = direction === 'v' || direction === 'vert' || direction === 'vertical' ? verticalClassName : horizontalClassName;

  return _react2.default.createElement(
    LinearLayoutDiv,
    { id: id, className: (0, _classnames2.default)(directionClassName, className), style: style },
    children
  );
}

LinearLayout.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  style: _propTypes2.default.object,

  direction: _propTypes2.default.oneOf(['h', 'horiz', 'horizontal', 'v', 'vert', 'vertical'])
};