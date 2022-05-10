const labelString =
  "<span style='font-weight: bold;'>recruiter@sangnguyenresume [~] $ </span>";
let workingDirectory = "/home/resume";
const playground = document.createElement("div");
playground.id = "playground";
const executedCommands = document.createElement("div");
executedCommands.id = "executed-commands";
executedCommands.className = "text-format";
const inputGroup = document.createElement("div");
inputGroup.id = "input-group";
const label = document.createElement("p");
label.id = "label";
label.className = "text-format";
label.innerHTML = labelString;
const input = document.createElement("div");
input.id = "input";
input.contentEditable = true;
input.className = "text-format";

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  inputGroup.append(label,input);
  playground.append(executedCommands, inputGroup);
  app.append(playground);
});

const displayResult = (content, style = {}) => {
  let p = document.createElement("p");
  p.innerHTML = content;
  p.style.display = "block";
  p.style.marginBottom = "2px";
  p.style.marginTop = "0px";
  executedCommands.append(p);
};

const getCommand = (command) => {
  switch (command) {
    case "clear":
      return () => {
        executedCommands.innerHTML = "";
      };
    case "help":
      return () => {
        return displayResult("why don't try neofetch?");
      };
    case "pwd":
      return () => {
        displayResult(workingDirectory);
      };
    case "":
      return () => {};
    default:
      return () => {
        return displayResult("Invalid command.");
      };
  }
};

document.addEventListener("click", () => {
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    displayResult(`${labelString + " " + input.innerText}`);
    getCommand(input.innerText)();
    input.innerText = "";
  }
});
