import express from "express";
import UserController from "./user.controller.js";
import { checkAuth } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validation.middleware.js";

export const UserRouter = express.Router();

UserRouter.get(
  "/current-user",
  checkAuth(),
  validate,
  UserController.getCurrentUser
);
UserRouter.post(
  "/apply-job",
  checkAuth(["user"]),
  validate,
  UserController.applyJob
);
