export const labelString =
  "<span style='font-weight: bold;'>recruiter@sangnguyenresume [~] $</span>";

export const playground = document.createElement("div");
playground.id = "playground";

export const executedCommands = document.createElement("div");
executedCommands.id = "executed-commands";
executedCommands.className = "text-format";

export const inputGroup = document.createElement("div");
inputGroup.id = "input-group";

export const label = document.createElement("p");
label.id = "label";
label.className = "text-format";
label.innerHTML = labelString;

export const input = document.createElement("div");
input.style.marginLeft = "10px";
input.id = "input";
input.contentEditable = true;
input.className = "text-format";