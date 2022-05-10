export const getCommand = (
  command,
  commandMap,
  blankCommand,
  invalidCommand
) => {
  if (command.length == 0) return blankCommand;
  let parsedCommand = parseCommand(command);
  if (commandMap[parsedCommand[0]]) return () => commandMap[parsedCommand[0]](parsedCommand);
  else return () => invalidCommand(parsedCommand[0]);
};

export const parseCommand = (aString) => {
  return aString.split(" ");
};
