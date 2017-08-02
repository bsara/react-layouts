
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

import classnames from 'classnames';
import randomatic from 'randomatic';
import styled     from 'styled-components';



const classNameUniquePart = randomatic('aA', 6);
const horizontalClassName = `horizontal-${classNameUniquePart}`;
const verticalClassName   = `vertical-${classNameUniquePart}`;


const LinearLayoutDiv = styled.div`
  display:         flex;
  flex-wrap:       nowrap;
  justify-content: var(--item-alignment, flex-start);


  > * {
    flex-grow: var(--stretch-items, 0);
  }


  &.${horizontalClassName} {
    flex-direction: row;

    > * {
      width:     var(--item-size);
      min-width: var(--item-min-size);
      max-width: var(--item-max-size);

      &:not(:last-child) {
        border-right: var(--item-separator, none);
      }
    }
  }


  &.${verticalClassName} {
    flex-direction: column;

    > * {
      height:     var(--item-size);
      min-height: var(--item-min-size);
      max-height: var(--item-max-size);

      &:not(:last-child) {
        border-bottom: var(--item-separator, none);
      }
    }
  }
`;


// eslint-disable-next-line react/require-optimization
export default class LinearLayout extends React.PureComponent {
  render() {
    const {
      id,
      children,
      className,
      style,
      direction
    } = this.props;

    const directionClassName = ((direction === 'v' || direction === 'vert' || direction === 'vertical') ? verticalClassName : horizontalClassName);

    return (
      <LinearLayoutDiv id={id} className={classnames(directionClassName, className)} style={style} innerRef={this.props.domRef}>
        {children}
      </LinearLayoutDiv>
    );
  }
}


LinearLayout.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),

  style: PropTypes.object,

  domRef:    PropTypes.func,
  direction: PropTypes.oneOf([ 'h', 'horiz', 'horizontal', 'v', 'vert', 'vertical' ])
};
