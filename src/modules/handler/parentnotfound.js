import { displayResult, executedCommands } from "../ui/render.js";

export const handleParentNotFound = (e) => {
  displayResult(executedCommands, `${e.message}`);
};
