import { Router } from "express";
import {addAdminController,loginAdminController} from "../../controller/admin/auth.js";
const authRoute = Router();

authRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn AuTh RoUtE iS wOrKiNg..!!" });
});

authRoute.post("/register", addAdminController);
authRoute.post("/login", loginAdminController);

export { authRoute };
