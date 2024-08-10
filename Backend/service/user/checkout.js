import {checkoutModel} from "../../model/checkout.model.js"
export async function addCheckout(data) {
    return new Promise(async (res, rej) => {
      try {
        const newCheckoutModel = new checkoutModel(data);
        const saveData = await newCheckoutModel.save();
        if (saveData)
          res({
            status: 200,
            data: "Checkut Data Added Sucessfully!!",
            message: "SUCESS..!!",
          });
        else rej({ status: 500, message: "Something Went Worng!!" });
      } catch (err) {
        console.log("err,...", err);
        rej({
          status: 500,
          error: err,
          message: err?.message || "Something Went Wrong!!!",
        });
      }
    });
  }