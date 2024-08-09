import { addAdmin, loginAdmin } from "../../service/admin/auth.js";
import { response } from "../../middleware/response.js";

export async function addAdminController(req, res) {
  try {
    const resp = await addAdmin(req.body);
    if (resp) return response("SUCCESS..!!", resp.data, resp.status, res);
    else return response("Something went wrong!!", {}, 500, res);
  } catch (err) {
    return response(err.message, err?.error, err.status, res);
  }
}

export async function loginAdminController(req, res) {
  try {
    const resp = await loginAdmin(req.body);
    if (resp) return response("SUCCESS..!!", resp.data, resp.status, res);
    else return response("Somthing Went Wrorng!!", {}, 500, res);
  } catch (err) {
    return response(err.message, err?.error, err.status, res);
  }
}
