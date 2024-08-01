import { Router } from "express";
const v1 = Router();

import { adminRoute } from "./admin/index.js";
import { userRoute } from "./user/index.js";

v1.get("/", (req, res) => {
  res.status(200).json({ message: "v1 RoUtE iS wOrKiNg..!!" });
});

v1.use("/admin", adminRoute);
v1.use("/user", userRoute);

export default v1;
