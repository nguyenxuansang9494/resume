export const getCommand = (
  command,
  functionMap,
  blankCommand,
  invalidCommand
) => {
  if (command.length == 0) return blankCommand;
  if (functionMap[command]) return functionMap[command];
  else return () => invalidCommand(command);
};

export const parseCommand = (aString) => {
  return aString.split(" ");
};
