import {
  BLANK_CMD,
  FILE_NOT_FOUND,
  INVALID_CMD,
  NOT_A_DIR,
  PERMISSION_DENIED,
} from "../exception/const.js";
import { handleBlankCmd } from "./blankcmdhandler.js";
import { handleFileNotFound } from "./filenotfoundhandler.js";
import { handle } from "./generichandler.js";
import { handlerInvalidCmd } from "./invalidcmdhandler.js";
import { handleNotADir } from "./notadirhandle.js";
import { handlePermissionDenied } from "./permissiondeniedhandler.js";

export const resolveHandler = (e) => {
  switch (e.message) {
    case FILE_NOT_FOUND:
      return handleFileNotFound(e);
    case NOT_A_DIR:
      return handleNotADir(e);
    case PERMISSION_DENIED:
      return handlePermissionDenied(e);
    case INVALID_CMD:
      return handlerInvalidCmd(e);
    case BLANK_CMD:
      return handleBlankCmd(e);
    default:
      return handle(e);
  }
};
