import { getFileSystemNode } from "../../system/filesystem/nodefinder.js";
import { readNode } from "../../system/filesystem/nodereader.js";
import { displayResult, executedCommands } from "../../ui/render.js";

export const ls = (parsedCommand) => {
  let path = parsedCommand[1] == undefined ? "." : parsedCommand[1];
  let currentNode = getFileSystemNode(path);
  let children = readNode(currentNode);
  for (let e in children) {
    displayResult(executedCommands, e);
  }
  //TODO
};
