import { executedCommands } from "../../ui/render.js";

export const clear = () => {
  executedCommands.innerHTML = "";
};
