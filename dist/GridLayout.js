'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var GridDiv = _styledComponents2.default.div(['--_column-count-template:repeat( var(--column-count,0),minmax( var(--item-min-width,var(--item-min-size,0)),var(--item-width,var(--item-size,var(--item-max-width,var(--item-max-size,1fr)))) ) );--_row-count-template:repeat( var(--row-count,0),minmax( var(--item-min-height,var(--item-min-size,0)),var(--item-height,var(--item-size,var(--item-max-height,var(--item-max-size,1fr)))) ) );display:grid;grid-template-areas:var(--areas-template);grid-template-columns:var(--columns-template,var(--_column-count-template));grid-template-rows:var(--rows-template,var(--_row-count-template));grid-gap:var(--item-gap);> *{grid-area:var(--area);grid-row:var(--row,span var(--row-span,1));grid-column:var(--column,span var(--column-span,1));}']);

// eslint-disable-next-line react/require-optimization

var GridLayout = function (_React$PureComponent) {
  _inherits(GridLayout, _React$PureComponent);

  function GridLayout() {
    _classCallCheck(this, GridLayout);

    return _possibleConstructorReturn(this, (GridLayout.__proto__ || Object.getPrototypeOf(GridLayout)).apply(this, arguments));
  }

  _createClass(GridLayout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        GridDiv,
        { id: this.props.id, className: this.props.className, style: this.props.style, innerRef: this.props.domRef },
        this.props.children
      );
    }
  }]);

  return GridLayout;
}(_react2.default.PureComponent);

exports.default = GridLayout;


GridLayout.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  style: _propTypes2.default.object,

  domRef: _propTypes2.default.func
};