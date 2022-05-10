import { commandMap, invalidCommand, blankCommand } from "./command.js";
import { parseCommand } from "../util/utils.js";
export const navigate = (command) => {
  if (command.length == 0) return blankCommand;
  let parsedCommand = parseCommand(command);
  if (commandMap[parsedCommand[0]])
    return () => commandMap[parsedCommand[0]](parsedCommand);
  else return () => invalidCommand(parsedCommand[0]);
};
