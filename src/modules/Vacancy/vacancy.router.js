import express from "express";
import { checkAuth } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validation.middleware.js";
import VacancyController from "./vacancy.controller.js";


export const VacancyRouter = express.Router();

VacancyRouter.post(
  "/create-job",
  checkAuth(["recruiter"]),
  validate,
  VacancyController.createVacancy
);


VacancyRouter.get(
    "/get-vacancies",
    checkAuth(),
    validate,
    VacancyController.getVacancies
)