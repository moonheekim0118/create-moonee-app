"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("./constants");

const cliOptions = [{
  type: _constants.TYPES.CREATE,
  defaultName: "React-JavaScript Bolierplate",
  templateName: "js-react",
  description: "React Bolierplate with JavaScript"
}, {
  type: _constants.TYPES.CREATE,
  defaultName: "React-TypeScript Bolierplate",
  templateName: "ts-react",
  description: "React Bolierplate with TypeScript"
}, {
  type: _constants.TYPES.CREATE,
  defaultName: "Next.js-JavaScript Bolierplate",
  templateName: "js-next",
  description: "Next.js Bolierplate with JavaScript"
}, {
  type: _constants.TYPES.CREATE,
  defaultName: "Next.js-TypeScript Bolierplate",
  templateName: "ts-next",
  description: "Next.js Bolierplate with TypeScript"
}, {
  type: _constants.TYPES.QUIT,
  description: "quit all the program"
}];
var _default = cliOptions;
exports.default = _default;