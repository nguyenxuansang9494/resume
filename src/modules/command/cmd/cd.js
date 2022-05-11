import { FILE_NOT_FOUND } from "../../exception/const.js";
import { Exception } from "../../exception/exception.js";
import {
  currentUserHomeFolder,
  rootFolder,
} from "../../system/filesystem/init.js";
import {
  changeWorkingDir,
  workingDirectory,
} from "../../system/filesystem/workingdir.js";

export const cd = (parsedCommand) => {
  let path = parsedCommand[1] == undefined ? "~" : parsedCommand[1];
  if (path.startsWith("/")) {
    let curentDir = rootFolder;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(curentDir, e, "");
      curentDir = e.length > 0 ? curentDir.children[e] : curentDir;
    }
    changeWorkingDir(curentDir);
    return;
  }
  if (path.startsWith("..")) {
    if (workingDirectory == rootFolder) {
      return;
    }
    let curentDir = workingDirectory.parent;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(curentDir, e, "..");
      curentDir = e.length > 0 && e != ".." ? curentDir.children[e] : curentDir;
    }
    changeWorkingDir(curentDir);
    return;
  }
  if (path.startsWith("~")) {
    let curentDir = currentUserHomeFolder;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(curentDir, e, "~");
      curentDir = e.length > 0 && e != "~" ? curentDir.children[e] : curentDir;
    }
    changeWorkingDir(curentDir);
    return;
  }
  let curentDir = workingDirectory;
  let parsedPath = path.split("/");
  for (let e of parsedPath) {
    isNotFound(curentDir, e, ".");
    curentDir = e.length > 0 && e != "." ? curentDir.children[e] : curentDir;
  }
  changeWorkingDir(curentDir);
};

const isNotFound = (dir, fileName, exclude) => {
  if (!dir.children[fileName] && fileName != exclude && fileName != "") {
    throw new Exception(FILE_NOT_FOUND, { fileName: fileName });
  }
};
