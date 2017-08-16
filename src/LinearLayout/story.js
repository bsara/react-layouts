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

import React         from 'react';
import { storiesOf } from '@storybook/react';

import LinearLayout from './LinearLayout';

import './story.css';



const contrastStyles = {
  backgroundColor: '#eee',
  border:          '1px solid lightgray'
};



storiesOf('LinearLayout', module)
  .add('Default', () => (
    <LinearLayout style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Horizontal', () => (
    <LinearLayout direction="horizontal" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Horizontal (Separator)', () => (
    <LinearLayout direction="horizontal" className="_separator" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Vertical', () => (
    <LinearLayout direction="vertical" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Vertical (Tall)', () => (
    <LinearLayout direction="vertical" className="_tall" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Vertical (Separator)', () => (
    <LinearLayout direction="vertical" className="_separator" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Vertical (Separator - Tall)', () => (
    <LinearLayout direction="vertical" className="_separator _tall" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Alignment (Start)', () => (
    <LinearLayout className="_align-items-start" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Alignment (End)', () => (
    <LinearLayout className="_align-items-end" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Alignment (Center)', () => (
    <LinearLayout className="_align-items-center" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Stretch Items (Horiz.)', () => (
    <LinearLayout className="_stretch-items" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Stretch Items (Horiz. w/Separator)', () => (
    <LinearLayout className="_stretch-items _separator" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Stretch Items (Vert.)', () => (
    <LinearLayout className="_stretch-items" direction="vert" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Stretch Items (Vert. w/Separator)', () => (
    <LinearLayout className="_stretch-items _separator" direction="v" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Stretch Items (Vert. w/Separator - Tall)', () => (
    <LinearLayout className="_stretch-items _separator _tall" direction="v" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Size (Horiz. w/Separator)', () => (
    <LinearLayout className="_item-size _separator" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Size (Vert. w/Separator)', () => (
    <LinearLayout className="_item-size _separator" direction="v" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Min Size (Horiz. w/Separator)', () => (
    <LinearLayout className="_item-min-size _separator" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Min Size (Vert. w/Separator)', () => (
    <LinearLayout className="_item-min-size _separator" direction="v" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Max Size (Horiz. w/Separator)', () => (
    <LinearLayout className="_item-max-size _separator" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ))
  .add('Item Max Size (Vert. w/Separator)', () => (
    <LinearLayout className="_item-max-size _separator" direction="v" style={contrastStyles}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </LinearLayout>
  ));
