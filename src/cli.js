import path from "path";
import fs from "fs";
import fse from "fs-extra";
import terminalKit from "terminal-kit";
import { defaultDirection, CLI_MESSAGES, TYPES } from "./options";

const term = terminalKit.terminal;
const fsp = fs.promises;

const createDirectory = async (selectedOption, destDirName) => {
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

  await fse.copy(targetDirPath, destDirPath);
  return selectedOption.type;
};

const getOption = async (dscriptions) => {
  return await term.singleColumnMenu(dscriptions, {
    style: term.green,
    selectedStyle: term.bold.black.bgWhite,
  }).promise;
};

const getDestDirName = async () => {
  const input = await term.inputField({}).promise;
  if (!input) return defaultDirection;
  else return input;
};

const startCommandLine = async (OptionsMap) => {
  const optionsValue = [...OptionsMap.values()];
  const descriptions = optionsValue.map((option) => option.description);

  term.cyan(CLI_MESSAGES.PRJOECT_NAME_QUESTION);

  const selectedDir = await getDestDirName();
  const selectedType = await getOption(descriptions);
  const selectedOption = OptionsMap.get(selectedType.selectedIndex);

  // find by description
  const resultType = await createDirectory(selectedOption, selectedDir);

  switch (resultType) {
    case TYPES.CREATE:
      term.cyan(CLI_MESSAGES.SUCCESS_MESSAGE);
      return process.exit(0);
    case TYPES.QUIT:
      term.white(CLI_MESSAGES.QUIT_MESSAGE);
      return process.exit(0);
    case TYPES.EXIST_DEST:
      term.red(CLI_MESSAGES.EXISTED_DEST_ERROR);
      return startCommandLine(OptionsMap);
    case TYPES.EXIST_TARGET:
      term.red(CLI_MESSAGES.EXISTED_TARGET_ERROR);
      return startCommandLine(OptionsMap);
    default:
      term.red(CLI_MESSAGES.FAILURE_MESSAGE);
      return process.exit(0);
  }
};

export default startCommandLine;
