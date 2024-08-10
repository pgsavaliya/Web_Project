import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      trim: true,
    },
    category:{
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);


export const productModel = model("product", productSchema);
