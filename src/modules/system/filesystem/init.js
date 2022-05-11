import { Node } from "./node.js";

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