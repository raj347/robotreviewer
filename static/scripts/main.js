/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2; js-indent-level: 2; -*- */
'use strict';

var spa = "spa/scripts/";

require.config({
  jsx: {
    fileExtension: '.jsx'
  },
  paths: {
    'spa': "spa/scripts",

    'underscore': "spa/scripts/vendor/underscore",
    'jquery': "spa/scripts/vendor/jquery",
    'Q': 'spa/scripts/vendor/q',
    'marked': 'spa/scripts/vendor/marked',
    'backbone': 'spa/scripts/vendor/backbone',

    'react': "spa/scripts/vendor/react-dev",
    'immutable': "spa/scripts/vendor/immutable",

    'JSXTransformer': "spa/scripts/vendor/JSXTransformer",
    'PDFJS': "spa/scripts/vendor/pdfjs/pdf"
  },
  shim: {
    'PDFJS': {
      exports: 'PDFJS',
      deps: ['spa/vendor/compatibility',
             'spa/vendor/ui_utils'] }
  }

});


define(function (require) {
  window.React = require('react'); // for pref tools

  require("app");
});
