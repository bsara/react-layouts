import { configure } from '@storybook/react';


function loadStories() {
  require('../src/GridLayout/story');
  require('../src/LinearLayout/story');
}


configure(loadStories, module);
