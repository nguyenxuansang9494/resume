import {
  executedCommands,
  input,
  inputGroup,
  label,
  labelString,
  playground,
  displayResult
} from "./modules/render.js";

import {
  commandMap,
  blankCommand,
  invalidCommand,
} from "./modules/command.js";

import {
  getCommand,
  parseCommand
} from "./modules/utils.js"

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  inputGroup.append(label, input);
  playground.append(executedCommands, inputGroup);
  app.append(playground);
  displayResult(executedCommands, "Try help command for more details.");
  displayResult(executedCommands, "...");
});


document.addEventListener("click", () => {
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    displayResult(executedCommands, `${labelString + " " + input.innerText}`);
    getCommand(input.innerText, commandMap, blankCommand, invalidCommand)();
    input.innerText = "";
  }
});
