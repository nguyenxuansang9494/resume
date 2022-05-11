import { displayResult, executedCommands } from "../../ui/render.js";

export const showmeyourcode = () => {
  displayResult(
    executedCommands,
    "I'm very happy to know that you want to read my code!!"
  );
  window.open("https://github.com/nguyenxuansang9494/resume");
};
