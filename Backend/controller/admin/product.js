import { addProduct, getAllProduct, getByIdProduct, updateProduct,deleteProduct } from "../../service/admin/product.js";
import { response } from "../../middleware/response.js";

export async function addProductController(req, res) {
  try {
    const resp = await addProduct(req.body);
    if (resp) return response("SUCCESS..!!", resp.data, resp.status, res);
    else return response("Something went wrong!!", {}, 500, res);
  } catch (err) {
    return response(err.message, err?.error, err.status, res);
  }
}

export async function getAllProductController(req, res) {
  try {
    const resp = await getAllProduct();
    if (resp) return response(resp.message, resp.data, resp.status, res);
    else return response("Somthing Went Wrorng!!", {}, 500, res);
  } catch (err) {
    return response(err.message, err?.error, err.status, res);
  }
}

export async function getByIdProductController(req, res) {
    try {
      const resp = await getByIdProduct(req.query._id);
      if (resp) return response(resp.message, resp.data, resp.status, res);
      else return response("Somthing Went Wrorng!!", {}, 500, res);
    } catch (err) {
      return response(err.message, err?.error, err.status, res);
    }
  }

  export async function updateProductController(req, res) {
    try {
      const resp = await updateProduct(req.query._id,req.body);
      if (resp) return response("SUCCESS..!!", resp.data, resp.status, res);
      else return response("Somthing Went Wrorng!!", {}, 500, res);
    } catch (err) {
      return response(err.message, err?.error, err.status, res);
    }
  }
  export async function deleteProductController(req, res) {
    try {
      const resp = await deleteProduct(req.query._id);
      if (resp) return response("SUCCESS..!!", resp.data, resp.status, res);
      else return response("Somthing Went Wrorng!!", {}, 500, res);
    } catch (err) {
      return response(err.message, err?.error, err.status, res);
    }
  }