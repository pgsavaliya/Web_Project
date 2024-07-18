import { model, Schema } from "mongoose";

const checkoutSchema = new Schema(
  {
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true,
    },
    mobile:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
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
      isPaid:{
        type:String,
        trim:true
      }
  },
  { timestamps: true }
);


export const checkoutModel = model("checkout", checkoutSchema);
