import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin@jobs-api.7gdm4wu.mongodb.net/?retryWrites=true&w=majority&appName=jobs-api`,
      {
        user: "admin",
        pass: "admin",
        dbName: "car-market-api",
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    console.log("Error While Connection to MongoDB");
  }
}
