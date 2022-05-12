import {
  curentUser,
  curentUserGroup,
  rootGroup,
  rootUser,
} from "../authorization/init.js";
import { Ownership } from "../authorization/ownership.js";
import {
  EXECUTE,
  Permission,
  READ,
  WRITE,
} from "../authorization/permission.js";
import { Node } from "./node.js";

export const rootFolder = new Node(
  false,
  "",
  undefined,
  {},
  undefined,
  new Ownership(rootUser, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(rootGroup, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(undefined, [
    new Permission(READ, true),
    new Permission(WRITE, false),
    new Permission(EXECUTE, true),
  ])
);
const homeFolder = new Node(
  false,
  "home",
  rootFolder,
  {},
  undefined,
  new Ownership(rootUser, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(rootGroup, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(undefined, [
    new Permission(READ, true),
    new Permission(WRITE, false),
    new Permission(EXECUTE, true),
  ])
);
export const currentUserHomeFolder = new Node(
  false,
  "recruiter",
  homeFolder,
  {},
  undefined,
  new Ownership(curentUser, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(curentUserGroup, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(undefined, [
    new Permission(READ, false),
    new Permission(WRITE, false),
    new Permission(EXECUTE, false),
  ])
);
homeFolder.children[currentUserHomeFolder.name] = currentUserHomeFolder;
rootFolder.children[homeFolder.name] = homeFolder;
const cv = new Node(
  true,
  "resume.txt",
  currentUserHomeFolder,
  undefined,
  "Name: Sang Nguyen",
  new Ownership(curentUser, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(curentUserGroup, [
    new Permission(READ, true),
    new Permission(WRITE, true),
    new Permission(EXECUTE, true),
  ]),
  new Ownership(undefined, [
    new Permission(READ, true),
    new Permission(WRITE, false),
    new Permission(EXECUTE, true),
  ])
);
currentUserHomeFolder.children[cv.name] = cv;
