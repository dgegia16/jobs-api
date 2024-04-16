import Vacancy from "./vacancy.model.js";

export async function createVacancy(body, userId) {
  const vacancy = new Vacancy({ ...body, owner: userId });
  await vacancy.save();
  return vacancy;
}
