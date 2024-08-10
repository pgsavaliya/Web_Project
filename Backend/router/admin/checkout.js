import { Router } from "express";
import {getAllCheckoutController, getByIdCheckoutController} from "../../controller/admin/checkout.js";
const checkoutRoute = Router();

checkoutRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn ChEcKoUt RoUtE iS wOrKiNg..!!" });
});

checkoutRoute.get("/getAllCheckout", getAllCheckoutController);
checkoutRoute.get("/getByIdCheckout", getByIdCheckoutController);
export { checkoutRoute };
