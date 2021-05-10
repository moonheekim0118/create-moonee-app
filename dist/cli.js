"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _terminalKit = _interopRequireDefault(require("terminal-kit"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const term = _terminalKit.default.terminal;
const fsp = _fs.default.promises;

const createDirectory = async (selectedOption, destDirName) => {
  if (!selectedOption) return;
  if (selectedOption.type === _constants.TYPES.QUIT) return _constants.TYPES.QUIT;
  const targetDirectionName = `../lib/templates/${selectedOption.templateName}`;

  const targetDirPath = _path.default.join(__dirname, targetDirectionName);

  const destDirPath = _path.default.join(process.cwd(), destDirName);

  const isExistDestDirPath = _fs.default.existsSync(destDirPath);

  if (destDirName !== "." && isExistDestDirPath) return _constants.TYPES.EXIST_DEST;

  if (destDirName === ".") {
    const datas = await fsp.readdir(destDirPath);
    if (datas.length > 0) return _constants.TYPES.EXIST_TARGET;
  }

  term.spinner();
  await _fsExtra.default.copy(targetDirPath, destDirPath);
  return selectedOption.type;
};

const getOption = async descriptions => {
  return await term.singleColumnMenu(descriptions, {
    style: term.green,
    selectedStyle: term.bold.black.bgYellow
  }).promise;
};

const getDestDirName = async () => {
  term.cyan(_constants.CLI_MESSAGES.PRJOECT_NAME_QUESTION);
  const input = await term.inputField({}).promise;
  const re = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$|([<>:"\/\\|?*])|(\.|\s)$/gi;

  if (re.test(input) && input !== ".") {
    term.red(_constants.CLI_MESSAGES.INVALID_DIR_NAME_ERROR);
    return getDestDirName();
  }

  if (!input) return _constants.defaultDirection;else return input;
};

const startCommandLine = async OptionsMap => {
  try {
    const optionsValue = [...OptionsMap.values()];
    const descriptions = optionsValue.map(option => option.description);
    const selectedDir = await getDestDirName();
    const selectedType = await getOption(descriptions);
    const selectedOption = OptionsMap.get(selectedType.selectedIndex);
    const resultType = await createDirectory(selectedOption, selectedDir);

    switch (resultType) {
      case _constants.TYPES.CREATE:
        term.cyan(_constants.CLI_MESSAGES.SUCCESS_MESSAGE);
        return process.exit(0);

      case _constants.TYPES.QUIT:
        term.white(_constants.CLI_MESSAGES.QUIT_MESSAGE);
        return process.exit(0);

      case _constants.TYPES.EXIST_DEST:
        term.red(_constants.CLI_MESSAGES.EXISTED_DEST_ERROR);
        return startCommandLine(OptionsMap);

      case _constants.TYPES.EXIST_TARGET:
        term.red(_constants.CLI_MESSAGES.EXISTED_TARGET_ERROR);
        return startCommandLine(OptionsMap);

      default:
        term.red(_constants.CLI_MESSAGES.FAILURE_MESSAGE);
        return process.exit(0);
    }
  } catch (error) {
    term.red(error);
    return process.exit(0);
  }
};

var _default = startCommandLine;
exports.default = _default;