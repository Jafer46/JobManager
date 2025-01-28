const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Role = require("../modules/admin/models/role.model");
const DocumentList = require("../constants/docs.names"); // Import your document list
const {
  default: { FORBIDDEN, UNAUTHORIZED },
} = require("../constants/statuscode.names");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(UNAUTHORIZED);
    throw new Error("User is not authorized!");
  }

  token = authHeader.split(" ")[1];

  if (!token) {
    res.status(UNAUTHORIZED);
    throw new Error("User is not authorized!");
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  req.user = decoded.user;

  // Fetch the user's role
  const role = await Role.findById(req.user.roleId);

  if (!role) {
    res.status(FORBIDDEN); // Forbidden
    throw new Error("Role not found!");
  }

  // Determine the resource based on the request path
  const resource = Object.keys(DocumentList).find((key) =>
    req.path.includes(DocumentList[key])
  );

  if (!resource) {
    res.status(FORBIDDEN); // Forbidden
    throw new Error("Resource not found!");
  }

  // Check permissions based on the HTTP method
  let permission;
  switch (req.method) {
    case "GET":
      permission = role.access.find(
        (item) => item.doc === resource && item.read
      );
      break;
    case "POST":
      permission = role.access.find(
        (item) => item.doc === resource && item.create
      );
      break;
    case "PUT":
      permission = role.access.find(
        (item) => item.doc === resource && item.edit
      );
      break;
    case "DELETE":
      permission = role.access.find(
        (item) => item.doc === resource && item.delete
      );
      break;
    default:
      res.status(405); // Method Not Allowed
      throw new Error("Method not allowed!");
  }

  if (!permission) {
    res.status(FORBIDDEN); // Forbidden
    throw new Error("User is not authorized to access this resource!");
  }

  next();
});

module.exports = { validateToken };
