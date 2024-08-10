import { Router } from "express";
import { authRoute } from "./auth.js";
import { productRoute } from "./product.js";
import { verifyAdminToken } from "../../middleware/verifyToken.js";
import { checkoutRoute } from "./checkout.js";
const adminRoute = Router();

adminRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn RoUtE iS wOkInG..!!" });
});

adminRoute.use("/auth", authRoute);
adminRoute.use("/product", verifyAdminToken, productRoute);
adminRoute.use("/checkout", verifyAdminToken, checkoutRoute);
export { adminRoute };
