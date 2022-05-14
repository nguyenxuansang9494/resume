import { rootFolder, currentUserHomeFolder } from "./init.js";
import { workingDirectory } from "./workingdir.js";
import { FILE_NOT_FOUND, PERMISSION_DENIED } from "../../exception/const.js";
import { Exception } from "../../exception/exception.js";
import { curentUser } from "../authorization/init.js";
import { split } from "../../util/utils.js";
import { EXECUTE } from "../authorization/permission.js";

export const getFileSystemNode = (path) => {
  let currentNode = workingDirectory;
  let parsedPath = split(path, "/", { "": 1, ".": 1 });
  if (path.startsWith("/")) {
    currentNode = rootFolder;
    parsedPath = split(path, "/", { "": 1 });
  }
  if (path.startsWith("..")) {
    if (workingDirectory == rootFolder) {
      return rootFolder;
    }
    currentNode = workingDirectory.parent;
    parsedPath = split(path, "/", { "": 1, "..": 1 });
  }
  if (path.startsWith("~")) {
    currentNode = currentUserHomeFolder;
    parsedPath = split(path, "/", { "": 1, "~": 1 });
  }
  isExcutable(currentNode);
  for (let e of parsedPath) {
    isExcutable(currentNode.children[e]);
    isNotFound(currentNode, e);
    currentNode = currentNode.children[e];
  }
  return currentNode;
};

const isExcutable = (currentNode) => {
  let executePermission = currentNode.otherOwnership.permissionGroup[EXECUTE];
  if (currentNode.groupOwnership.owner.members.includes(curentUser)) {
    executePermission = currentNode.groupOwnership.permissionGroup[EXECUTE];
  }
  if (currentNode.userOwnership.owner == curentUser) {
    executePermission = currentNode.userOwnership.permissionGroup[EXECUTE];
  }
  if (!executePermission.enable) {
    throw new Exception(PERMISSION_DENIED, { node: currentNode });
  }
};

const isNotFound = (dir, fileName) => {
  if (!dir.children[fileName]) {
    throw new Exception(FILE_NOT_FOUND, { fileName: fileName });
  }
};
