export const READ = "read";
export const WRITE = "write";
export const EXECUTE = "execute";

export function Permission(type, enable) {
  this.type = type;
  this.enable = enable;
}

export function PermissionGroup(
  read = new Permission(READ, false),
  write = new Permission(WRITE, false),
  execute = new Permission(EXECUTE, false)
) {
  this.read = read;
  this.write = write;
  this.execute = execute;
}
