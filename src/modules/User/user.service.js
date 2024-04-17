import User from "./user.model.js";
import { getVacancyByIdService } from "../Vacancy/vacancy.service.js";

export async function currentUserService(currentUserId) {
  const user = await User.findById(currentUserId);

  user.password = undefined;
  return user;
}

export async function applyVacancyService(jobId, userId) {
  const job = await getVacancyByIdService(jobId);
  const user = await User.findById(userId);

  if (user.appliedJobs.includes(job._id)) {
    throw new Error("You are already applied");
  } else {
    user.appliedJobs.push(job._id);
    await user.save();
  }
}
