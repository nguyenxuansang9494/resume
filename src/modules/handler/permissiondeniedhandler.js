import { displayResult, executedCommands } from "../ui/render.js";

export const handlePermissionDenied = (e) => {
    displayResult(executedCommands, `zsh: ${e.details.node.name} : Permission denied.`)
}