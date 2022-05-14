import { PERMISSION_DENIED } from "../../exception/const.js";
import { curentUser } from "../authorization/init.js";
import { READ } from "../authorization/permission.js";


export const readNode = (node) => {
  isReadable(node);
  return node.children;
};

const isReadable = (currentNode) => {
  let readPermission = currentNode.otherOwnership.permissionGroup[READ];
  if (currentNode.groupOwnership.owner.members.includes(curentUser)) {
    readPermission = currentNode.groupOwnership.permissionGroup[READ];
  }
  if (currentNode.userOwnership.owner == curentUser) {
    readPermission = currentNode.userOwnership.permissionGroup[READ];
  }
  if (!readPermission.enable) {
    throw new Exception(PERMISSION_DENIED, { node: currentNode });
  }
};
