import { productModel } from "../../model/product.model.js";

export async function addProduct(data) {
  return new Promise(async (res, rej) => {
    try {
      const newProductModel = new productModel(data);
      const saveData = await newProductModel.save();
      if (saveData)
        res({
          status: 200,
          data: "Product Added Sucessfully!!",
          message: "SUCESS..!!",
        });
      else rej({ status: 500, message: "Something Went Worng!!" });
    } catch (err) {
      console.log("err,...", err);
      rej({
        status: 500,
        error: err,
        message: err?.message || "Something Went Wrong!!!",
      });
    }
  });
}

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

export async function updateProduct(_id, data) {
  return new Promise(async (res, rej) => {
    try {
      const updateData = await productModel.findByIdAndUpdate(_id, data, {
        new: true,
      });
      if (updateData) {
        res({ status: 200, data: "Product Updated", message: "Sucess..!!" });
      } else {
        res({ status: 404, data: "", message: "Something went worng..!!" });
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

export async function deleteProduct(_id) {
  return new Promise(async (res, rej) => {
    try {
      const deletedData = await productModel.findByIdAndDelete( _id );
      if (deletedData) {
        res({ status: 200, data: "Product Deleted", message: "Sucess..!!" });
      } else {
        res({ status: 404, data: "", message: "Product not deleted..!!" });
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
