"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = exports.CLI_MESSAGES = exports.defaultDirection = void 0;
const defaultDirection = "new-app";
exports.defaultDirection = defaultDirection;
const CLI_MESSAGES = {
  PRJOECT_NAME_QUESTION: "Enter Your Project Name or Default 'new-app' ",
  SELECT_OPTION_QUESTION: "Select boilerplate to install",
  SUCCESS_MESSAGE: "Your boilerplate is Successfully created! it's time to hack!	(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  FAILURE_MESSAGE: "We can't create bolierplate now. Please try again\n",
  QUIT_MESSAGE: "Bye!(・∀・)ノ",
  EXISTED_DEST_ERROR: "Your selected Directory is already existed. Please select other directory\n",
  EXISTED_TARGET_ERROR: "Your selected Directory is already taken. Please select other directory or empty space\n",
  INVALID_DIR_NAME_ERROR: "Invalid Directory name\n"
};
exports.CLI_MESSAGES = CLI_MESSAGES;
const TYPES = {
  CREATE: "CREATE",
  QUIT: "QUIT",
  EXIST_DEST: "EXIST_DEST",
  EXIST_TARGET: "EXIST_TARGET"
};
exports.TYPES = TYPES;