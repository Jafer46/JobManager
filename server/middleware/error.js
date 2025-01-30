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
    case 400:
      return res.status(400).json({
        title: "Bad Request",
        message: err.message,
        stackTrace: err.stack,
      });
    case CONFLICT:
      return res.status(CONFLICT).json({
        title: "Conflict",
        message: err.message,
        stackTrace: err.stack,
      });
    case UNAUTHORIZED:
      return res.status(UNAUTHORIZED).json({
        title: "Unauthorized Access",
        message: err.message,
        stackTrace: err.stack,
      });
    case SERVERERROR:
      return res.status(SERVERERROR).json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    case NOT_FOUND:
      return res.status(NOT_FOUND).json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case FORBIDDEN:
      return res.status(FORBIDDEN).json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      return res.status(500).json({
        title: "Internal Server Error",
        message: "An unexpected error occurred.",
        stackTrace: err.stack,
      });
  }
};

module.exports = errorHandler;
