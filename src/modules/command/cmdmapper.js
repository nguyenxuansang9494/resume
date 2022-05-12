import { displayResult, executedCommands } from "../ui/render.js";
import { cat } from "./cmd/cat.js";
import { cd } from "./cmd/cd.js";
import { clear } from "./cmd/clear.js";
import { echo } from "./cmd/echo.js";
import { exit } from "./cmd/exit.js";
import { help } from "./cmd/help.js";
import { ls } from "./cmd/ls.js";
import { mkdir } from "./cmd/mkdir.js";
import { pwd } from "./cmd/pwd.js";
import { rm } from "./cmd/rm.js";
import { rmdir } from "./cmd/rmdir.js";
import { showmeyourcode } from "./cmd/showmeyourcode.js";
import { touch } from "./cmd/touch.js";
export const commandMap = {
  cat: cat,
  cd: cd,
  clear: clear,
  echo: echo,
  exit: exit,
  help: help,
  ls: ls,
  mkdir: mkdir,
  pwd: pwd,
  rm: rm,
  rmdir: rmdir,
  showmeyourcode: showmeyourcode,
  touch: touch,
};
export const blankCommand = () => {};
export const invalidCommand = (command) => {
  return displayResult(executedCommands, `zsh: command not found: ${command}`);
};
