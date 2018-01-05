// helpers/test-setup.js

require("babel-register")();

// HELP MOCHA HANDLE CSS MODULES

var hook = require("css-modules-require-hook");
var sass = require("node-sass");

hook({
  extensions: [".scss", ".css"],
  generateScopedName: "[local]___[hash:base64:5]",
  preprocessCss: (data, file) => sass.renderSync({ file }).css
});

// SETUP JSDOM BUSINESS

//Error, know issue, here is fix and discussion: https://github.com/airbnb/enzyme/issues/942#issuecomment-314715229
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM("").window;
global.document = document;

// var jsdom = require("jsdom").jsdom;

var exposedProperties = ["window", "navigator", "document"];

// global.document = jsdom("");
// global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: "node.js"
};

//ENZYME //

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

configure({ adapter: new Adapter() });
