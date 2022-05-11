import {
  executedCommands,
  input,
  inputGroup,
  label,
  labelString,
  playground,
  displayResult,
} from "./ui/render.js";

import { resolveCommand } from "./command/resolver.js";
import { resolveHandler } from "./handler/resolver.js";

export const init = () => {
  window.addEventListener("load", () => {
    const app = document.getElementById("app");
    inputGroup.append(label, input);
    playground.append(executedCommands, inputGroup);
    app.append(playground);
    displayResult(executedCommands, 'Try "help" command for more details.'); // welcome message
    displayResult(executedCommands, "...");
  });

  document.addEventListener("click", () => {
    input.focus();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      try {
        e.preventDefault();
        displayResult(
          executedCommands,
          `${labelString + " " + input.innerText}`
        );
        resolveCommand(input.innerText)();
      } catch (error) {
        resolveHandler(error);
      } finally {
        input.innerText = "";
      }
    }
  });
};
