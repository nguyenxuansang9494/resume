import {
  workingDirectory,
  rootFolder,
  changeWorkingDir,
} from "../system/filesystem.js";
import { displayResult, executedCommands, inputGroup } from "../ui/render.js";
import { cd } from "./cmd/cd.js";
import { clear } from "./cmd/clear.js";
import { exit } from "./cmd/exit.js";
import { help } from "./cmd/help.js";
import { ls } from "./cmd/ls.js";
import { pwd } from "./cmd/pwd.js";
import { showmeyourcode } from "./cmd/showmeyourcode.js";
export const commandMap = {
  cd: cd,
  clear: clear,
  exit: exit,
  help: help,
  ls: ls,
  pwd: pwd,
  showmeyourcode: showmeyourcode,
};
export const blankCommand = () => {};
export const invalidCommand = (command) => {
  return displayResult(executedCommands, `zsh: command not found: ${command}`);
};
