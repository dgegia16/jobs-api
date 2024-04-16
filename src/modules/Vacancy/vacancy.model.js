import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    Applies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Vacancy", vacancySchema);
