import { Router } from "express";
import {addProductController,getAllProductController, getByIdProductController, updateProductController, deleteProductController} from "../../controller/admin/product.js";
const productRoute = Router();

productRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn PrOdUcT RoUtE iS wOrKiNg..!!" });
});

productRoute.post("/addProduct", addProductController);
productRoute.get("/getAllProduct", getAllProductController);
productRoute.get("/getByIdProduct", getByIdProductController);
productRoute.post("/updateProduct", updateProductController);
productRoute.post("/deleteProduct", deleteProductController);
export { productRoute };
