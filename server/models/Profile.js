import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    birth: {
        type: "string",
      },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
   
    phone: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Profile", profileSchema);