import jwt from "jsonwebtoken";
import config from "../config/config.js";


export async function verifyAdminToken(req, res, next) {
  let token = req.headers["authorization"];
  if (!token) {
    res.status(403).json({ success: false, message: "token missing" });
  } else {
    token = token.split(" ")[1];

    jwt.verify(
      token,
      config.ADMIN_ACCESS_TOKEN,
      async (err, payload) => {
        if (err) {
          console.log(err);
          res
            .status(403)
            .json({ success: false, message: "unauthorized token" });
        } else {
          req.body.adminId = payload.adminId
          req.adminId = payload.adminId
          req.password = payload.password
          next();
        }
      }
    );
  }
}
