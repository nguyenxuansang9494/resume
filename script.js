const input = document.getElementById("input");
const executedCommand = document.getElementById("executed-commands");
const label = "recruiter@sangnguyenresume [~] $ ";
document.addEventListener("keydown", (e) => {
  console.info(e.key);
  if (input.value == label && e.key == "Backspace") {
    e.preventDefault();
  } else if (e.key == "Enter") {
    e.preventDefault();
    let a = document.createElement("a");
    a.innerHTML = input.value;
    a.style.display = "block";
    executedCommand.append(a);
    getCommand(parse(input.value))();
    input.value = label;
  }
});

const parse = (aString) => {
  return aString.split(label)[1];
};

const getCommand = (command) => {
  if (command == "clear") {
    return () => {
      executedCommand.innerHTML = "";
    };
  } else {
    return () => {
      let a = document.createElement("a");
      a.innerHTML = "invalid command.";
      a.style.display = "block";
      executedCommand.append(a);
    };
  }
};
