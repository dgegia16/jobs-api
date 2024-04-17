import {
  getVacancyByIdService,
  createVacancyService,
  appliedVacancyService,
} from "./vacancy.service.js";

class VacancyController {
  async createVacancy(req, res) {
    try {
      const vacancy = await createVacancyService(req.body, req.user.userId);
      res.status(201).json(vacancy);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAppliedJobs(req, res) {
    try {
      const jobs = await appliedVacancyService(req.user.userId);
      res.status(200).json(jobs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new VacancyController();
