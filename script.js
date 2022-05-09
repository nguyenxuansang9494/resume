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
    input.value = label;
  }
});
