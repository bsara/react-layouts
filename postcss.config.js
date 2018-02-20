/* eslint-env node */
/* eslint-disable global-require */


module.exports = {
  map: { inline: false },

  plugins: [
    require('postcss-nesting'),

    require('postcss-modules')({
      generateScopedName: 'rl-[sha1:hash:8]',
      getJSON() {
        // NOTE: Intentionally doing nothing. Setting getJSON to a noop function disables
        //       json file generation.
      }
    }),

    require('autoprefixer'),
    require('postcss-discard-comments')
  ]
};
