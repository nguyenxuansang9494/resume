export function User(username, password) {
  this.username = username;
  this.password = password;
}
const recruiter = new User("recruiter", "password");

export const registeredUser = { recruiter: recruiter };
export let curentUser = recruiter;