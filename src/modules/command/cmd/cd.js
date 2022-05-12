import { FILE_NOT_FOUND } from "../../exception/const.js";
import { Exception } from "../../exception/exception.js";
import {
  changeWorkingDir,
} from "../../system/filesystem/workingdir.js";

import {
  getFileSystemNode
} from "../../system/filesystem/nodefinder.js"

export const cd = (parsedCommand) => {
  let path = parsedCommand[1] == undefined ? "~" : parsedCommand[1];
  let currentDir = getFileSystemNode(path)
  changeWorkingDir(currentDir);
};
