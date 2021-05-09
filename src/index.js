import cliOptions from "./options";
import startCommandLine from "./cli";

const run = () => {
  const cliOptionMap = new Map(
    cliOptions.map((option, index) => [index, option])
  );
  startCommandLine(cliOptionMap);
};

module.exports = () => {
  return {
    run,
  };
};
