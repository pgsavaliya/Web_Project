import {  addCheckout } from "../../service/user/checkout.js";
import { response } from "../../middleware/response.js";

export async function addCheckoutController(req, res) {
  try {
    const resp = await addCheckout(req.body);
    if (resp) return response(resp.message, resp.data, resp.status, res);
    else return response("Somthing Went Wrorng!!", {}, 500, res);
  } catch (err) {
    return response(err.message, err?.error, err.status, res);
  }
}

