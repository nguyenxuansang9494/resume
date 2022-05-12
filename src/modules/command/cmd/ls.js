import { getFileSystemNode } from "../../system/filesystem/nodefinder.js";
import { workingDirectory } from "../../system/filesystem/workingdir.js";
import { displayResult, executedCommands } from "../../ui/render.js";

export const ls = (parsedCommand) => {
  let path = parsedCommand[1] == undefined ? "." : parsedCommand[1];
  let currentDir = getFileSystemNode(path);
  for (let key in currentDir.children) {
    displayResult(executedCommands, key);
  }
  //TODO
};
