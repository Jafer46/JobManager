const {
  default: {
    BAD_REQUEST,
    CONFLICT,
    FORBIDDEN,
    NOT_FOUND,
    SERVERERROR,
    UNAUTHORIZED,
  },
} = require("../constants/statuscode.names");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case BAD_REQUEST:
      res.json({
        title: "bad request",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case CONFLICT:
      res.json({
        title: "conflict",
        message: err.message,
        stackTrace: err.stack,
      });
    case CONFLICT:
      res.json({
        title: "conflict",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case UNAUTHORIZED:
      res.json({
        title: "unauthorized access",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case SERVERERROR:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("no error found");
      break;
  }
};

modules.exports = errorHandler;
