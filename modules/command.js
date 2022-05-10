import { workingDirectory } from "./filesystem.js";
import { displayResult, executedCommands, inputGroup } from "./render.js";
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
    let path = workingDirectory.name;
    let curentDir = workingDirectory;
    while (curentDir.parent) {
      path = `${curentDir.parent.name}/` + path;
      curentDir = curentDir.parent;
    }
    displayResult(executedCommands, path);
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
