export const getCommand = (
  command,
  functionMap,
  blankCommand,
  invalidCommand
) => {
  if (command.length == 0) return blankCommand;
  let parsedCommand = parseCommand(command);
  if (functionMap[parsedCommand[0]]) return () => functionMap[command](parsedCommand);
  else return () => invalidCommand(parsedCommand[0]);
};

export const parseCommand = (aString) => {
  return aString.split(" ");
};
