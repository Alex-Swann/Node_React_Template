"use strict";
import jsdom from 'jsdom';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

chai.use(chaiEnzyme());
chai.use(chaiJsx);

global.document = doc;
global.window = win;
global.navigator = global.window.navigator;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
