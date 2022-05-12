import { getFileSystemNode } from "../../system/filesystem/nodefinder.js";
import { workingDirectory } from "../../system/filesystem/workingdir.js";
import { displayResult, executedCommands } from "../../ui/render.js";

export const ls = (parsedCommand) => {
  let path = parsedCommand[1] == undefined ? "." : parsedCommand[1];
  let currentNode = getFileSystemNode(path);
  if (currentNode.isFile) {
    displayResult(executedCommands, currentNode.name);
  }
  for (let key in currentNode.children) {
    displayResult(executedCommands, key);
  }
  //TODO
};
