import Vacancy from "./vacancy.model.js";

export async function createVacancyService(body, userId) {
  const vacancy = new Vacancy({ ...body, owner: userId });
  await vacancy.save();
  return vacancy;
}

export async function getVacancyByIdService(jobId) {
  const job = await Vacancy.findById(jobId);
  if (!job) throw new Error("Job not found");
  return job;
}

export async function appliedVacancyService(currentUserId) {
  const userVacancy = await Vacancy.find({ owner: { $eq: currentUserId } });
  return userVacancy;
}
