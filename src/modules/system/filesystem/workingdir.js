import { currentUserHomeFolder } from "./init.js";

export let workingDirectory = currentUserHomeFolder;

export const changeWorkingDir = (dir) => {
  workingDirectory = dir;
};
