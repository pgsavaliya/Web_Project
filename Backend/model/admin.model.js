import { model, Schema } from "mongoose";

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    mobile: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);


export const adminModel = model("admin", adminSchema);
