import { commandMap } from "../cmdmapper.js";
import { executedCommands, displayResult } from "../../ui/render.js";

export const help = () => {
  displayResult(executedCommands, "These commands are supported:");
  for (let key in commandMap) {
    displayResult(executedCommands, `- ${key}`);
  }
};
