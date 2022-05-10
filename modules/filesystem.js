export function Node(isFile, name, parent, children, fileContent) {
  this.isFile = isFile;
  this.name = name;
  this.parent = parent;
  this.children = children;
  this.fileContent = fileContent;
  if (isFile) {
    this.children = undefined;
  }
  if (!isFile) {
    this.fileContent = undefined;
  }
}

export const rootFolder = new Node(false, "", undefined, {}, undefined);
const homeFolder = new Node(false, "home", rootFolder, {}, undefined);
export const recruiterFolder = new Node(
  false,
  "recruiter",
  homeFolder,
  {},
  undefined
);
homeFolder.children[recruiterFolder.name] = recruiterFolder;
rootFolder.children[homeFolder.name] = homeFolder;

export let workingDirectory = recruiterFolder;
