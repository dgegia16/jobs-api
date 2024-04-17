import { currentUserService, applyVacancyService } from "./user.service.js";

class UserController {
  async getCurrentUser(req, res) {
    try {
      const user = await currentUserService(req.user.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async applyJob(req, res) {
    try {
      const updatedUser = await applyVacancyService(
        req.body.jobId,
        req.user.userId
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new UserController();
