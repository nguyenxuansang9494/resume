import {
  executedCommands,
  input,
  inputGroup,
  label,
  labelString,
  playground,
} from "./modules/htmlelement.js";

import { workingDirectory } from "./modules/filesystem.js";

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  inputGroup.append(label, input);
  playground.append(executedCommands, inputGroup);
  app.append(playground);
  displayResult(executedCommands, "Try help command for more details.")
  displayResult(executedCommands,"...")
});

const displayResult = (parentElement,
  content,
  style = {
    display: "block",
    marginBottom: "2px",
    marginTop: "0px",
  }
) => {
  let p = document.createElement("p");
  p.innerHTML = content;
  Object.assign(p.style, style);
  parentElement.append(p);
};

const getCommand = (command) => {
  const functionMap = {
    clear: () => {
      executedCommands.innerHTML = "";
    },
    help: () => {
      displayResult(executedCommands,"These commands are supported:")
      for (let key in functionMap) {
        displayResult(executedCommands,`- ${key}`);
      }
    },
    pwd: () => {
      displayResult(executedCommands, workingDirectory);
    },
    exit: () => {
      displayResult(executedCommands, "logout.");
      inputGroup.remove();
    },
  };
  const blankCommand = () => {};
  const invalidCommand = () => {
    return displayResult(executedCommands,`zsh: command not found: ${command}`);
  };
  if (command.length == 0) return blankCommand;
  if (functionMap[command]) return functionMap[command];
  else return invalidCommand;
};

const parseCommand = (aString) => {
  return aString.split(" ");
};

document.addEventListener("click", () => {
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    displayResult(executedCommands,`${labelString + " " + input.innerText}`);
    getCommand(parseCommand(input.innerText)[0])();
    input.innerText = "";
  }
});
