import { workingDirectory } from "../../system/filesystem/workingdir.js";
import { executedCommands, displayResult } from "../../ui/render.js";


export const pwd = () => {
  let path = workingDirectory.name;
  let curentDir = workingDirectory;
  while (curentDir.parent) {
    path = `${curentDir.parent.name}/` + path;
    curentDir = curentDir.parent;
  }
  if (path.length == 0) path = "/";
  displayResult(executedCommands, path);
};
