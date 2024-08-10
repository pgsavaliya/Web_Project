import { checkoutModel } from "../../model/checkout.model.js";



export async function getAllCheckout() {
  return new Promise(async (res, rej) => {
    try {
      const checkoutData = await checkoutModel.find({}, { __v: 0, updatedAt: 0 });
      if (checkoutData.length > 0) {
        res({ status: 200, data: checkoutData, message: "Sucess..!!" });
      } else {
        res({ status: 404, data: "", message: "Data Not Found..!!" });
      }
    } catch (err) {
      console.log("err....", err);
      rej({
        status: 500,
        error: err,
        message: err?.message || "Something Went Wrong!!!",
      });
    }
  });
}

export async function getByIdCheckout(_id) {
  return new Promise(async (res, rej) => {
    try {
      const checkoutData = await checkoutModel.findById(
        { _id },
        { __v: 0, updatedAt: 0 }
      );
      if (checkoutData != null) {
        res({ status: 200, data: checkoutData, message: "Sucess..!!" });
      } else {
        res({ status: 404, data: "", message: "Data Not Found..!!" });
      }
    } catch (err) {
      console.log("err....", err);
      rej({
        status: 500,
        error: err,
        message: err?.message || "Something Went Wrong!!!",
      });
    }
  });
}

