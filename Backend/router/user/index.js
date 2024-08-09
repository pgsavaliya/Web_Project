import { Router } from "express";
import { productRoute } from "./product.js";
const userRoute = Router();


userRoute.get("/", (req, res) => {
  res.status(200).json({ message: "User RoUtE iS wOkInG..!!" });
});
userRoute.use("/product",productRoute)

export { userRoute };
