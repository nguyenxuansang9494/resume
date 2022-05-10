const input = document.getElementById("input");
const inputGroup = document.getElementById("input-group");
const executedCommand = document.getElementById("executed-commands");
const label = "recruiter@sangnguyenresume [~] $ ";
let workingDirectory = "/home/resume";

const displayResult = (content) => {
  let p = document.createElement("p");
  p.innerHTML = content;
  p.style.display = "block";
  p.style.marginBottom = "2px";
  p.style.marginTop = "0px";
  executedCommand.append(p);
};

const getCommand = (command) => {
  switch (command) {
    case "clear":
      return () => {
        executedCommand.innerHTML = "";
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
    displayResult(`${label + " " + input.value}`);
    getCommand(input.value)();
    input.value = "";
  }
});
