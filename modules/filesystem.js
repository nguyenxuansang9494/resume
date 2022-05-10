export let workingDirectory = "/home/resume";

export function File(isFile,name,parent,children) {
    this.isFile = isFile,
    this.name = name,
    this.parent = parent,
    this.children = children
}
