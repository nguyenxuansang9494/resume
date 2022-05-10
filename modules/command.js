import { workingDirectory } from "./filesystem.js";
import {displayResult, executedCommands, inputGroup} from "./render.js"
export const functionMap = {
  clear: () => {
    executedCommands.innerHTML = "";
  },
  help: () => {
    displayResult(executedCommands, "These commands are supported:");
    for (let key in functionMap) {
      displayResult(executedCommands, `- ${key}`);
    }
  },
  pwd: () => {
    displayResult(executedCommands, workingDirectory);
  },
  exit: () => {
    displayResult(executedCommands, "logout.");
    inputGroup.remove();
  },
};
export const blankCommand = () => {};
export const invalidCommand = (command) => {
  return displayResult(executedCommands, `zsh: command not found: ${command}`);
};
