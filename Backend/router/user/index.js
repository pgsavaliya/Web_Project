import { Router } from "express";
import { productRoute } from "./product.js";
import { checkoutRoute } from "./checkout.js";
const userRoute = Router();


userRoute.get("/", (req, res) => {
  res.status(200).json({ message: "User RoUtE iS wOkInG..!!" });
});
userRoute.use("/product",productRoute)
userRoute.use("/checkout",checkoutRoute)

export { userRoute };
