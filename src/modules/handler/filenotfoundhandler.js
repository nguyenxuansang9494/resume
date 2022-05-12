import { displayResult, executedCommands } from "../ui/render.js";

export const handleFileNotFound = (e) => {
  displayResult(executedCommands, `zsh: ${e.details.fileName}: is not found.`);
};
