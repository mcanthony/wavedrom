'use strict';

window.WaveDrom = window.WaveDrom || {};

var index = require('./');

window.WaveDrom.ProcessAll = index.processAll;
window.WaveDrom.RenderWaveForm = index.renderWaveForm;
window.WaveDrom.EditorRefresh = index.editorRefresh;

/* eslint-env browser */
