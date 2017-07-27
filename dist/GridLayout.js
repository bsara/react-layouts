'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridLayout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridDiv = _styledComponents2.default.div.withConfig({
  displayName: 'GridLayout__GridDiv'
})(['--_column-count-template:repeat( var(--column-count,0),minmax( var(--item-min-width,var(--item-min-size,0)),var(--item-width,var(--item-size,var(--item-max-width,var(--item-max-size,1fr)))) ) );--_row-count-template:repeat( var(--row-count,0),minmax( var(--item-min-height,var(--item-min-size,0)),var(--item-height,var(--item-size,var(--item-max-height,var(--item-max-size,1fr)))) ) );display:grid;grid-template-areas:var(--areas-template);grid-template-columns:var(--columns-template,var(--_column-count-template));grid-template-rows:var(--rows-template,var(--_row-count-template));grid-gap:var(--item-gap);']);
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

function GridLayout(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  return _react2.default.createElement(
    GridDiv,
    { id: id, className: className, style: style },
    children
  );
}

GridLayout.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  style: _propTypes2.default.object
};