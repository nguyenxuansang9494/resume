import { rootFolder, currentUserHomeFolder } from "./init.js";
import { workingDirectory } from "./workingdir.js";

export const getFileSystemNode = (path) => {
  if (path.startsWith("/")) {
    let currentDir = rootFolder;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(currentDir, e, "");
      currentDir = e.length > 0 ? currentDir.children[e] : currentDir;
    }
    return currentDir;
  }
  if (path.startsWith("..")) {
    if (workingDirectory == rootFolder) {
      return;
    }
    let currentDir = workingDirectory.parent;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(currentDir, e, "..");
      currentDir =
        e.length > 0 && e != ".." ? currentDir.children[e] : currentDir;
    }
    return currentDir;
  }
  if (path.startsWith("~")) {
    let currentDir = currentUserHomeFolder;
    let parsedPath = path.split("/");
    for (let e of parsedPath) {
      isNotFound(currentDir, e, "~");
      currentDir =
        e.length > 0 && e != "~" ? currentDir.children[e] : currentDir;
    }
    return currentDir;
  }
  let currentDir = workingDirectory;
  let parsedPath = path.split("/");
  for (let e of parsedPath) {
    isNotFound(currentDir, e, ".");
    currentDir = e.length > 0 && e != "." ? currentDir.children[e] : currentDir;
  }
  return currentDir;
};

const isNotFound = (dir, fileName, exclude) => {
  if (!dir.children[fileName] && fileName != exclude && fileName != "") {
    throw new Exception(FILE_NOT_FOUND, { fileName: fileName });
  }
};
