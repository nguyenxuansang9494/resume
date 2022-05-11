import { workingDirectory } from "../../system/filesystem/workingdir.js";
import { displayResult, executedCommands } from "../../ui/render.js";


export const ls = (parsedCommand) => {
  if (parsedCommand.length == 1) {
    for (let key in workingDirectory.children) {
      displayResult(executedCommands, key);
    }
  }
  //TODO
};
