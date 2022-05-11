import { FILE_NOT_FOUND} from "../exception/const.js";
import { handleFileNotFound } from "./filenotfound.js";
import { handle } from "./generichandler.js";

export const resolveHandler = (e) => {
  switch (e.message) {
    case FILE_NOT_FOUND:
      return handleFileNotFound(e);
    default:
      return handle(e);
  }
};
