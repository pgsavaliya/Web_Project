import { Router } from "express";
import {getAllProductController, getByIdProductController} from "../../controller/user/product.js";
const productRoute = Router();

productRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn PrOdUcT RoUtE iS wOrKiNg..!!" });
});


productRoute.get("/getAllProduct", getAllProductController);
productRoute.get("/getByIdProduct", getByIdProductController);
export { productRoute };
