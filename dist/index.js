"use strict";

var _options = _interopRequireDefault(require("./options"));

var _cli = _interopRequireDefault(require("./cli"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const run = () => {
  const cliOptionMap = new Map(_options.default.map((option, index) => [index, option]));
  (0, _cli.default)(cliOptionMap);
};

module.exports = () => {
  return {
    run
  };
};