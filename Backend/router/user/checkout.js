import { Router } from "express";
import {addCheckoutController} from "../../controller/user/checkout.js";
const checkoutRoute = Router();

checkoutRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn ChEcKoUt RoUtE iS wOrKiNg..!!" });
});


checkoutRoute.post("/addCheckout", addCheckoutController);
export { checkoutRoute };
