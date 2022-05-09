const input = document.getElementById("input");
const executedCommand = document.getElementById("executed-commands");
const label = "recruiter@sangnguyenresume [~] $ ";

const parse = (aString) => {
  return aString.split(label)[1];
};

const displayResult = (content) => {
  let a = document.createElement("a");
  a.innerHTML = content;
  a.style.display = "block";
  executedCommand.append(a);
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
    case "neofetch":
      return () => {
        displayResult("Name: Sang Xuan Nguyen");
      };
    case "":
      return () => {};
    default:
      return () => {
        return displayResult("Invalid command.");
      };
  }
};

document.addEventListener("click", (e) => {
  input.focus();
  if (input.selectionStart < label.length) {
    input.selectionStart = label.length;
  }
});

document.addEventListener("keydown", (e) => {
  if (
    (input.value == label && e.key == "Backspace") ||
    input.selectionStart < label.length
  ) {
    e.preventDefault();
  } else if (e.key == "Enter") {
    e.preventDefault();
    displayResult(input.value);
    getCommand(parse(input.value))();
    input.value = label;
  }
});
