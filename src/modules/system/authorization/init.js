import { Group } from "./group.js";
import { User } from "./user.js";

const recruiter = new User("recruiter", "password");

export let curentUser = recruiter;
export const rootUser = new User("root", "root");
export const rootGroup = new Group("root", [rootUser]);
export const recruiterGroup = new Group("recruiter", [recruiter]);
export let curentUserGroup = recruiterGroup;
