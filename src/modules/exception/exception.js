export function Exception(message, details = {}) {
  this.message = message;
  this.details = details;
}
