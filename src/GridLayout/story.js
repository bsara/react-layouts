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
    <GridLayout className="_column-count" style={contrastStyles}>
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
    <GridLayout className="_column-count _gap" style={contrastStyles}>
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
    <GridLayout className="_row-count" style={contrastStyles}>
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
    <GridLayout className="_row-count _gap" style={contrastStyles}>
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
    <GridLayout className="_areas-template" style={contrastStyles}>
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
    <GridLayout className="_columns-template" style={contrastStyles}>
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
    <GridLayout className="_rows-template" style={contrastStyles}>
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
    <GridLayout className="_item-size _column-count" style={contrastStyles}>
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
    <GridLayout className="_item-size _row-count" style={contrastStyles}>
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
