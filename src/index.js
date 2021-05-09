import { cliOptions } from "./options";
import startCommandLine from "./cli";

const run = () => {
  startCommandLine(cliOptions);
};

module.exports = () => {
  return {
    run,
  };
};
