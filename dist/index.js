"use strict";

var _options = _interopRequireDefault(require("./options"));

var _cli = _interopRequireDefault(require("./cli"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const run = () => {
  const cliOptionMap = (0, _utils.arrayToMap)(_options.default);
  (0, _cli.default)(cliOptionMap);
};

module.exports = () => {
  return {
    run
  };
};