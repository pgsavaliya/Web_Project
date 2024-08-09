import { adminModel } from "../../model/admin.model.js"
import config from "../../config/config.js";
import jwt from "jsonwebtoken";


export async function addAdmin(data) {
  return new Promise(async (res, rej) => {
    try {
      if (data.email || data.mobile) {
        if (data.password) {
          const userData = await adminModel.find({ email: data.email });
          if (userData.length > 0) {
            rej({ status: 400, message: "email Already registerd" });
          } else {
            data.fullName = data.firstName + "" + data.lastName;
            const newAdminModel = new adminModel(data);
            const saveData = await newAdminModel.save();
            if (saveData) res({ status: 200, data: "Data Saved!!" });
            else rej({ status: 500, message: "Something Went Worng!!" });
          }
        } else {
            
          rej({ status: 400, message: "Password Is Require!!" });
        }
      } else {
        rej({
          status: 400,
          message: "Email or mobileNumber Is Require!!",
        });
      }
    } catch (err) {
      console.log("err ...", err);
      rej({
        status: 500,
        error: err,
        message: err?.message || "Something Went Wrong!!!",
      });
    }
  });
}

export async function loginAdmin(data) {
  return new Promise(async (res, rej) => {
    try {
      if (data) {
        let loginData = await adminModel.findOne({ email: data.email });
        if (loginData) {
          if (data.password == loginData.password) {
            let token = jwt.sign(
              {
                adminId: loginData._id,
                password: loginData.password,
              },
              config.ADMIN_ACCESS_TOKEN,
              { expiresIn: config.ADMIN_ACCESS_TIME }
            );
            let data = {
              token: token,
              first_name: loginData.firstName,
              last_name: loginData.lastName,
            };
            res({ status: 200, data: data });
          } else {
            rej({ status: 400, message: "Worng Email And Password" });
          }
        } else {
          rej({ status: 400, message: "Email Not Regersted Register First" });
        }
      }
    } catch (err) {
      console.log("err ...", err);
      rej({
        status: 500,
        error: err,
        message: err?.message || "Something Went Wrong!!!",
      });
    }
  });
}
