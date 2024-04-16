import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["recruiter", "user"],
    },

    password: {
      type: String,
      required: true,
    },
    vacancies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vacancy",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("User", userSchema);
