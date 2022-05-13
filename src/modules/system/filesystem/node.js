export function Node(
  isFile,
  name,
  parent,
  children,
  fileContent,
  userOwnership,
  groupOwnership,
  otherOwnership
) {
  this.isFile = isFile;
  this.name = name;
  this.children = children;
  this.parent = parent;
  this.fileContent = fileContent;
  if (isFile) {
    this.children = undefined;
  }
  if (!isFile) {
    this.fileContent = undefined;
  }
  this.userOwnership = userOwnership;
  this.groupOwnership = groupOwnership;
  this.otherOwnership = otherOwnership;
}
