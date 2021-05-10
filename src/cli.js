import path from "path";
import fs from "fs";
import fse from "fs-extra";
import terminalKit from "terminal-kit";
import { defaultDirection, CLI_MESSAGES, TYPES } from "./constants";
import {
  validatePathName,
  extractMapValues,
  extractDescription,
} from "./utils";

const term = terminalKit.terminal;
const fsp = fs.promises;

export const createDirectory = async (selectedOption, destDirName) => {
  if (!selectedOption) return;
  if (selectedOption.type === TYPES.QUIT) return TYPES.QUIT;

  const targetDirectionName = `../lib/templates/${selectedOption.templateName}`;
  const targetDirPath = path.join(__dirname, targetDirectionName);
  const destDirPath = path.join(process.cwd(), destDirName);

  const isExistDestDirPath = fs.existsSync(destDirPath);
  if (destDirName !== "." && isExistDestDirPath) return TYPES.EXIST_DEST;
  if (destDirName === ".") {
    const datas = await fsp.readdir(destDirPath);
    if (datas.length > 0) return TYPES.EXIST_TARGET;
  }

  term.spinner();
  await fse.copy(targetDirPath, destDirPath);
  return selectedOption.type;
};

export const getOption = async (descriptions) => {
  return await term.singleColumnMenu(descriptions, {
    style: term.green,
    selectedStyle: term.bold.black.bgYellow,
  }).promise;
};

export const getDestDirName = async () => {
  term.cyan(CLI_MESSAGES.PRJOECT_NAME_QUESTION);
  const input = await term.inputField({}).promise;
  const isIllegal = validatePathName(input);
  if (isIllegal) {
    term.red(CLI_MESSAGES.INVALID_DIR_NAME_ERROR);
    return getDestDirName();
  }
  if (!input) return defaultDirection;
  else return input;
};

const startCommandLine = async (OptionsMap) => {
  try {
    const optionsValue = extractMapValues(OptionsMap);
    const descriptions = extractDescription(optionsValue);

    const selectedDir = await getDestDirName();
    const selectedType = await getOption(descriptions);
    const selectedOption = OptionsMap.get(selectedType.selectedIndex);
    const resultType = await createDirectory(selectedOption, selectedDir);
    const assignAction = {
      [TYPES.CREATE]: () => {
        term.cyan(CLI_MESSAGES.SUCCESS_MESSAGE);
        return process.exit(0);
      },
      [TYPES.QUIT]: () => {
        term.white(CLI_MESSAGES.QUIT_MESSAGE);
        return process.exit(0);
      },
      [TYPES.EXIST_DEST]: () => {
        term.red(CLI_MESSAGES.EXISTED_DEST_ERROR);
        return startCommandLine(OptionsMap);
      },
      [TYPES.EXIST_TARGET]: () => {
        term.red(CLI_MESSAGES.EXISTED_TARGET_ERROR);
        return startCommandLine(OptionsMap);
      },
    };
    assignAction[resultType]();
  } catch (error) {
    term.red(error);
    return process.exit(0);
  }
};

export default startCommandLine;
