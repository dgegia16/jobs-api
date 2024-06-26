import express from "express";
import bodyParser from "body-parser";
import { connectToMongoDB } from "./shared/database.js";

// routers

import { AuthRouter } from "./modules/Auth/auth.router.js";
import { VacancyRouter } from "./modules/Vacancy/vacancy.router.js";
import { UserRouter } from "./modules/User/user.router.js";

const app = express();
app.use(bodyParser.json());

async function main() {
  await connectToMongoDB();

  app.use("/api/auth", AuthRouter);
  app.use("/api/vacancies", VacancyRouter);
  app.use("/api/users", UserRouter);

  app.listen(3000, () => {
    console.log("SERVER IS ON");
  });
}

main();
