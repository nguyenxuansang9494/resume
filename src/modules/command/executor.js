import { commandMap, invalidCommand, blankCommand } from "./commandmapper.js";
import { parseCommand } from "../util/utils.js";
export const execute = (command) => {
  if (command.length == 0) return blankCommand;
  let parsedCommand = parseCommand(command);
  if (commandMap[parsedCommand[0]])
    return () => commandMap[parsedCommand[0]](parsedCommand);
  else return () => invalidCommand(parsedCommand[0]);
};
