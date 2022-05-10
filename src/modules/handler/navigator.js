import { FILE_NOT_FOUND, PARENT_NOT_FOUND } from "../exception/const.js";
import { handleFileNotFound } from "./filenotfound.js";
import { handle } from "./generichandler.js";
import { handleParentNotFound } from "./parentnotfound.js";

export const navigate = (e) => {
  switch (e.message) {
    case FILE_NOT_FOUND:
      return handleFileNotFound(e);
    case PARENT_NOT_FOUND:
      return handleParentNotFound(e);
    default:
      return handle(e);
  }
};
