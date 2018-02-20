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

import React         from 'react';
import { storiesOf } from '@storybook/react';

import GridLayout from './GridLayout';

import './story.css';



const contrastStyles = {
  backgroundColor: '#eee',
  border:          '1px solid lightgray'
};



storiesOf('GridLayout', module)
  .add('Default', () => (
    <GridLayout style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Column Count (4)', () => (
    <GridLayout styleName="_column-count" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Column Count (4 w/Gap)', () => (
    <GridLayout styleName="_column-count _gap" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Row Count (4)', () => (
    <GridLayout styleName="_row-count" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Row Count (4 w/Gap)', () => (
    <GridLayout styleName="_row-count _gap" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Areas Template', () => (
    <GridLayout styleName="_areas-template" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Columns Template', () => (
    <GridLayout styleName="_columns-template" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2 blahblahblah</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Rows Template', () => (
    <GridLayout styleName="_rows-template" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Item Size (Column Count)', () => (
    <GridLayout styleName="_item-size _column-count" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ))
  .add('Item Size (Row Count)', () => (
    <GridLayout styleName="_item-size _row-count" style={contrastStyles}>
      <div>Item 1.1</div>
      <div>Item 1.2</div>
      <div>Item 1.3</div>
      <div>Item 1.4</div>

      <div>Item 2.1</div>
      <div>Item 2.2</div>
      <div>Item 2.3</div>
      <div>Item 2.4</div>

      <div>Item 3.1</div>
      <div>Item 3.2</div>
      <div>Item 3.3</div>
      <div>Item 3.4</div>

      <div>Item 4.1</div>
      <div>Item 4.2</div>
      <div>Item 4.3</div>
      <div>Item 4.4</div>
    </GridLayout>
  ));
