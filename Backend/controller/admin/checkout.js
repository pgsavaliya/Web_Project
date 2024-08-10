import { getAllCheckout,getByIdCheckout } from "../../service/admin/checkout.js";
import { response } from "../../middleware/response.js";

export async function getAllCheckoutController(req, res) {
  try {
    const resp = await getAllCheckout();
    if (resp) return response(resp.message, resp.data, resp.status, res);
    else return response("Somthing Went Wrorng!!", {}, 500, res);
  } catch (err) {
    return response(err.message, err?.error, err.status, res);
  }
}

export async function getByIdCheckoutController(req, res) {
    try {
      const resp = await getByIdCheckout(req.query._id);
      if (resp) return response(resp.message, resp.data, resp.status, res);
      else return response("Somthing Went Wrorng!!", {}, 500, res);
    } catch (err) {
      return response(err.message, err?.error, err.status, res);
    }
  }
