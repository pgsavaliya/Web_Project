import {  getAllProduct, getByIdProduct } from "../../service/user/product.js";
import { response } from "../../middleware/response.js";

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
