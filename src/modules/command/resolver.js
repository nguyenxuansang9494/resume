import { commandMap } from "./cmdmapper.js";
import { parseCommand } from "../util/utils.js";
import { Exception } from "../exception/exception.js";
import { BLANK_CMD, INVALID_CMD } from "../exception/const.js";
export const resolveCommand = (command) => {
  if (command.length == 0) {
    throw new Exception(BLANK_CMD, {});
  }
  let parsedCommand = parseCommand(command);
  if (commandMap[parsedCommand[0]])
    return () => commandMap[parsedCommand[0]](parsedCommand);
  else throw new Exception(INVALID_CMD, { command: parsedCommand[0] });
};
