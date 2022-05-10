let workingDirectory = "/home/resume";

/*-------------create html element here------------------*/
const labelString =
  "<span style='font-weight: bold;'>recruiter@sangnguyenresume [~] $</span>";
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
input.style.marginLeft = "10px";
input.id = "input";
input.contentEditable = true;
input.className = "text-format";
/*-------------------------------------------------------*/

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  inputGroup.append(label, input);
  playground.append(executedCommands, inputGroup);
  app.append(playground);
});

const displayResult = (
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
    case "exit":
      return () => {
        displayResult("logout.");
        inputGroup.remove();
      };
    case "":
      return () => {};
    default:
      return () => {
        return displayResult(`zsh: command not found: ${command}`);
      };
  }
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
    displayResult(`${labelString + " " + input.innerText}`);
    getCommand(parseCommand(input.innerText)[0])();
    input.innerText = "";
  }
});
