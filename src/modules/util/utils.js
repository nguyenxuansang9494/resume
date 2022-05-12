export const parseCommand = (aString) => {
  aString = aString.trim();
  return aString.split(" ");
};

export const split = (aString, delimeter, exclusions) => {
  let splits = aString.split(delimeter);
  let result = [];
  for (let e of splits) {
    if (!exclusions[e]) result.push(e);
  }
  return result;
};
