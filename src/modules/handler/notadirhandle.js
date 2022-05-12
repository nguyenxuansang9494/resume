
import { displayResult, executedCommands } from "../ui/render.js";

export const handleNotADir= (e) => {
  displayResult(executedCommands, `zsh: ${e.details.fileName}: Not a directory.`);
};
