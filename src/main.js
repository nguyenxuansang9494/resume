// import {
//   executedCommands,
//   input,
//   inputGroup,
//   label,
//   labelString,
//   playground,
//   displayResult,
// } from "./modules/ui/render.js";

import { init } from "./modules/util/initiator.js";

// import { execute } from "./modules/command/executor.js";

// window.addEventListener("load", () => {
//   const app = document.getElementById("app");
//   inputGroup.append(label, input);
//   playground.append(executedCommands, inputGroup);
//   app.append(playground);
//   displayResult(executedCommands, "Try help command for more details.");
//   displayResult(executedCommands, "...");
// });

// document.addEventListener("click", () => {
//   input.focus();
// });

// input.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     e.preventDefault();
//     displayResult(executedCommands, `${labelString + " " + input.innerText}`);
//     execute(input.innerText)();
//     input.innerText = "";
//   }
// });

init();
