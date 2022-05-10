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
export const currentUserHomeFolder = new Node(
  false,
  "recruiter",
  homeFolder,
  {},
  undefined
);
homeFolder.children[currentUserHomeFolder.name] = currentUserHomeFolder;
rootFolder.children[homeFolder.name] = homeFolder;
const cv = new Node(
  true,
  "resume.txt",
  currentUserHomeFolder,
  undefined,
  "Name: Sang Nguyen"
);
currentUserHomeFolder.children[cv.name] = cv;
export let workingDirectory = currentUserHomeFolder;

export const changeWorkingDir = (dir) => {
  workingDirectory = dir;
};
