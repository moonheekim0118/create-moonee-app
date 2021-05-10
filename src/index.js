import cliOptions from "./options";
import startCommandLine from "./cli";
import { arrayToMap } from "./utils";

const run = () => {
  const cliOptionMap = arrayToMap(cliOptions);
  startCommandLine(cliOptionMap);
};

module.exports = () => {
  return {
    run,
  };
};
