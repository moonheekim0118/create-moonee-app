export const defaultDirection = "new-app";

export const CLI_MESSAGES = {
  PRJOECT_NAME_QUESTION: "Enter Your Project Name or Default 'new-app' ",
  SELECT_OPTION_QUESTION: "Select Option",
  SUCCESS_MESSAGE:
    "Your boilerplate is Successfully created! it's time to hack!",
  FAILURE_MESSAGE: "We can't create bolierplate now. Please try again",
  QUIT_MESSAGE: "Bye!",
  EXISTED_DEST_ERROR:
    "Your selected Directory is already existed. Please select other directory",
  EXISTED_TARGET_ERROR:
    "Your selected Directory is already taken. Please select other directory or empty space",
};

export const TYPES = {
  CREATE: "create",
  QUIT: "quit",
  EXIST_DEST: "EXIST_DEST",
  EXIST_TARGET: "EXIST_TARGET",
};

export const cliOptions = [
  {
    type: TYPES.CREATE,
    defaultName: "React-JavaScript Bolierplate",
    templateName: "js-react",
    description: "React Bolierplate with JavaScript, React Router and Emotion",
  },
  {
    type: TYPES.CREATE,
    defaultName: "React-TypeScript Bolierplate",
    templateName: "ts-react",
    description: "React Bolierplate with TypeScript, React Router and Emotion",
  },
  {
    type: TYPES.CREATE,
    defaultName: "Next.js-JavaScript Bolierplate",
    templateName: "js-next",
    description: "Next.js Bolierplate with JavaScript and Emotion",
  },
  {
    type: TYPES.CREATE,
    defaultName: "Next.js-TypeScript Bolierplate",
    templateName: "ts-next",
    description: "Next.js Bolierplate with TypeScript and Emotion",
  },
  {
    type: TYPES.QUIT,
    description: "quit all the program",
  },
];
