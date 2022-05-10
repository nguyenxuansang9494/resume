import { displayResult, executedCommands, inputGroup } from "../../ui/render.js";

export const exit = () => {
  displayResult(executedCommands, "logout.");
  inputGroup.remove();
};
