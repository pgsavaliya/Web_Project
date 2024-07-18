import { model, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    product: [
      {
        productId: {
          type: String,
          trim: true,
        },
        numberOfItem: {
          type: Number,
          trim: true,
        },
        productPrice: {
          type: Number,
          trim: true,
        },
        totalPrice:{
            type:Number,
            trim:true
        }
      },
    ],
    subtotal: {
      type: Number,
      trim: true,
    },
    extraCharges: {
      type: Number,
      trim: true,
    },
    finalPrice: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

export const cartModel = model("cart", cartSchema);
