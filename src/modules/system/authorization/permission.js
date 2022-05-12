export const READ = "r";
export const WRITE = "w";
export const EXECUTE = "x";

export function Permission(type, enable) {
  this.type = type;
  this.enable = enable;
}
