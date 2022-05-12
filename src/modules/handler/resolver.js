import { FILE_NOT_FOUND, NOT_A_DIR} from "../exception/const.js";
import { handleFileNotFound } from "./filenotfoundhandler.js";
import { handle } from "./generichandler.js";
import { handleNotADir } from "./notadirhandle.js";

export const resolveHandler = (e) => {
  switch (e.message) {
    case FILE_NOT_FOUND:
      return handleFileNotFound(e);
    case NOT_A_DIR:
      return handleNotADir(e);
    default:
      return handle(e);
  }
};
