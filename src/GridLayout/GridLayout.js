
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

import React     from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';



const GridDiv = styled.div`
  display: grid;

  grid-template-columns: var(--columns-template, repeat(
                           var(--column-count, 0),
                           minmax(
                             var(--item-min-width, var(--item-min-size, 0)),
                             var(--item-width, var(--item-size, var(--item-max-width, var(--item-max-size, 1fr))))
                           )
                         ));
  grid-template-rows:  var(--rows-template, repeat(
                         var(--row-count, 0),
                         minmax(
                           var(--item-min-height, var(--item-min-size, 0)),
                           var(--item-height,  var(--item-size, var(--item-max-height, var(--item-max-size, 1fr))))
                         )
                       ));
  grid-template-areas: var(--areas-template);
  grid-gap:            var(--item-gap);


  > * {
    grid-row:    var(--row,    var(--area, (span var(--row-span, 1))));
    grid-column: var(--column, var(--area, (span var(--column-span, 1))));
    grid-area:   var(--area);
  }
`;


// eslint-disable-next-line react/require-optimization
export default class GridLayout extends React.Component {
  render() {
    return (
      <GridDiv {...this.props} innerRef={this.props.domRef}>
        {this.props.children}
      </GridDiv>
    );
  }
}


GridLayout.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),

  style: PropTypes.object,

  domRef: PropTypes.func
};
