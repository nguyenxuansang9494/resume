import { rootFolder, currentUserHomeFolder } from "./init.js";
import { workingDirectory } from "./workingdir.js";
import { FILE_NOT_FOUND } from "../../exception/const.js";
import { Exception } from "../../exception/exception.js";

export const getFileSystemNode = (path) => {
  if (path.startsWith("/")) {
    let currentNode = rootFolder;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(currentNode, e, "");
      currentNode = e.length > 0 ? currentNode.children[e] : currentNode;
    }
    return currentNode;
  }
  if (path.startsWith("..")) {
    if (workingDirectory == rootFolder) {
      return;
    }
    let currentNode = workingDirectory.parent;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(currentNode, e, "..");
      currentNode =
        e.length > 0 && e != ".." ? currentNode.children[e] : currentNode;
    }
    return currentNode;
  }
  if (path.startsWith("~")) {
    let currentNode = currentUserHomeFolder;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(currentNode, e, "~");
      currentNode =
        e.length > 0 && e != "~" ? currentNode.children[e] : currentNode;
    }
    return currentNode;
  }
  let currentNode = workingDirectory;
  let parsedPath = path.split("/");
  for (let e of parsedPath) {
    isNotFound(currentNode, e, ".");
    currentNode = e.length > 0 && e != "." ? currentNode.children[e] : currentNode;
  }
  return currentNode;
};

const isNotFound = (dir, fileName, exclude) => {
  if (!dir.children[fileName] && fileName != exclude && fileName != "") {
    throw new Exception(FILE_NOT_FOUND, { fileName: fileName });
  }
};
