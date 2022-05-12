import { displayResult, executedCommands } from "../ui/render.js";

export const handleFileNotFound = (e) => {
  displayResult(executedCommands, `${e.details.fileName} is not found.`);
};
