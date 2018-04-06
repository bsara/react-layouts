const GLOBAL_HTML_ATTRIBUTE_NAMES = [
  'accesskey',
  'autocapitalize',
  'className',
  'contenteditable',
  'contextmenu',
  'dir',
  'draggable',
  'dropzone',
  'hidden',
  'id',
  'is',
  'itemid',
  'itemprop',
  'itemref',
  'itemscope',
  'itemtype',
  'lang',
  'slot',
  'spellcheck',
  'style',
  'tabindex',
  'title',
  'translate'
];

const EVENT_HANDLER_REGEX = /^on[A-Z]/;



export function pickGlobalHtmlAttirbuteProps(obj) {
  const newObj = {};

  for (let propName in obj) {
    if (GLOBAL_HTML_ATTRIBUTE_NAMES.includes(propName) || propName.startsWith('data-') || propName.match(EVENT_HANDLER_REGEX)) {
      newObj[propName] = obj[propName];
    }
  }

  return newObj;
}
