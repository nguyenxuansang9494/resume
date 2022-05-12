import { changeWorkingDir } from "../../system/filesystem/workingdir.js";

import { getFileSystemNode } from "../../system/filesystem/nodefinder.js";
import { Exception } from "../../exception/exception.js";
import { NOT_A_DIR } from "../../exception/const.js";

export const cd = (parsedCommand) => {
  let path = parsedCommand[1] == undefined ? "~" : parsedCommand[1];
  let currentNode = getFileSystemNode(path);
  isDir(currentNode);
  changeWorkingDir(currentNode);
};

const isDir = (node) => {
  if (node.isFile) throw new Exception(NOT_A_DIR, { fileName: node.name });
};
