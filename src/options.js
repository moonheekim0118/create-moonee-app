import { TYPES } from "./constants";

const cliOptions = [
  {
    type: TYPES.CREATE,
    defaultName: "React-JavaScript Bolierplate",
    templateName: "js-react",
    description: "React Bolierplate with JavaScript",
  },
  {
    type: TYPES.CREATE,
    defaultName: "React-TypeScript Bolierplate",
    templateName: "ts-react",
    description: "React Bolierplate with TypeScript",
  },
  {
    type: TYPES.CREATE,
    defaultName: "Next.js-JavaScript Bolierplate",
    templateName: "js-next",
    description: "Next.js Bolierplate with JavaScript",
  },
  {
    type: TYPES.CREATE,
    defaultName: "Next.js-TypeScript Bolierplate",
    templateName: "ts-next",
    description: "Next.js Bolierplate with TypeScript",
  },
  {
    type: TYPES.QUIT,
    description: "quit all the program",
  },
];

export default cliOptions;
