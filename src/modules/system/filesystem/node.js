export function Node(isFile, name, parent, children, fileContent) {
  this.isFile = isFile;
  this.name = name;
  this.children = children;
  this.parent = parent
  this.fileContent = fileContent;
  if (isFile) {
    this.children = undefined;
  }
  if (!isFile) {
    this.fileContent = undefined;
  }
}
