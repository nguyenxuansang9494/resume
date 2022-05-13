import { displayResult, executedCommands } from "../ui/render.js";

export const handlerInvalidCmd = (e) => {
  displayResult(
    executedCommands,
    `zsh: command not found: ${e.details.command}`
  );
};
