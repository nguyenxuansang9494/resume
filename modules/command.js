import {
  workingDirectory,
  rootFolder,
  changeWorkingDir,
} from "./filesystem.js";
import { displayResult, executedCommands, inputGroup } from "./render.js";
export const commandMap = {
  clear: () => {
    executedCommands.innerHTML = "";
  },
  help: () => {
    displayResult(executedCommands, "These commands are supported:");
    for (let key in commandMap) {
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
    if (path.length == 0) path = "/";
    displayResult(executedCommands, path);
  },
  ls: (parsedCommand) => {
    if (parsedCommand.length == 1) {
      for (let key in workingDirectory.children) {
        displayResult(executedCommands, key);
      }
    }
  },
  cd: (parsedCommand) => {
    let path = parsedCommand[1];
    if (path.startsWith("/")) {
      let curentDir = rootFolder;
      let parsedPath = path.split("/");
      for (let e of parsedPath) {
        curentDir = e.length > 0 ? curentDir.children[e] : curentDir;
      }
      changeWorkingDir(curentDir);
      return;
    }
    if (path.startsWith("..")) {
      let curentDir = workingDirectory.parent;
      let parsedPath = path.split("/");
      for (let e of parsedPath) {
        curentDir =
          e.length > 0 && e != ".." ? curentDir.children[e] : curentDir;
      }
      changeWorkingDir(curentDir);
      return;
    }
    let curentDir = workingDirectory;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      curentDir = e.length > 0 && e != "." ? curentDir.children[e] : curentDir;
    }
    changeWorkingDir(curentDir);
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
