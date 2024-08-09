import { productModel } from "../../model/product.model.js";

export async function getAllProduct() {
  return new Promise(async (res, rej) => {
    try {
      const productData = await productModel.find({}, { __v: 0, updatedAt: 0 });
      if (productData.length > 0) {
        res({ status: 200, data: productData, message: "Sucess..!!" });
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

export async function getByIdProduct(_id) {
  return new Promise(async (res, rej) => {
    try {
      const productData = await productModel.findById(
        { _id },
        { __v: 0, updatedAt: 0 }
      );
      if (productData != null) {
        res({ status: 200, data: productData, message: "Sucess..!!" });
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

