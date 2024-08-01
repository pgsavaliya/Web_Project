import { Router } from "express";
const adminRoute = Router();

adminRoute.get("/", (req, res) => {
  res.status(200).json({ message: "aDmIn RoUtE iS wOkInG..!!" });
});

export { adminRoute };
