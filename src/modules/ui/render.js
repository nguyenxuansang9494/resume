import { curentUser } from "../system/system.js";

export const labelString = `<span id="label-string"><span id="label-user">${curentUser.username}@</span><span id="label-hostname">sangnguyenresume</span> <span id="label-path">[~]</span> <span id="label-splitter">$</span></span>`;

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

export const colorScheme = {
  Background: "#282a36",
  CurrentLine: "#44475a",
  Selection: "#44475a",
  Foreground: "#f8f8f2",
  Comment: "#6272a4",
  Cyan: "#8be9fd",
  Green: "#50fa7b",
  Orange: "#ffb86c",
  Pink: "#ff79c6",
  Purple: "#bd93f9",
  Red: "#ff5555",
  Yellow: "#f1fa8c",
};

export const displayResult = (
  parentElement,
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
