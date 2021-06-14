import { TYPES } from "./constants";

const cliOptions = [
  {
    type: TYPES.CREATE,
    defaultName: "React-JavaScript Bolierplate",
    templateName: "js-react",
    description: "React boilerplate with JavaScript",
  },
  {
    type: TYPES.CREATE,
    defaultName: "React-TypeScript Bolierplate",
    templateName: "ts-react",
    description: "React boilerplate with TypeScript",
  },
  {
    type: TYPES.CREATE,
    defaultName: "Next.js-JavaScript boilerplate",
    templateName: "js-next",
    description: "Next.js boilerplate with JavaScript",
  },
  {
    type: TYPES.CREATE,
    defaultName: "Next.js-TypeScript boilerplate",
    templateName: "ts-next",
    description: "Next.js boilerplate with TypeScript",
  },
  {
    type: TYPES.QUIT,
    description: "quit all the program",
  },
];

export default cliOptions;
