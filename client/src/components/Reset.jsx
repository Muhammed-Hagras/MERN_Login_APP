import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/username.module.css";
import {Toaster} from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helpers/validate.js"

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
      confirm_pwd: "admin@123"
    },
    validate: resetPasswordValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" 
      reverseOrder={false}
      >

      </Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width: "50%"}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
            <form action="" className="py-20" onSubmit={formik.handleSubmit}>
             

              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="password"
                  placeholder="New password"
                />
                <input
                  {...formik.getFieldProps("confirm_pwd")}
                  className={styles.textbox}
                  type="password"
                  placeholder="Repeat password"
                />
                <button className={styles.btn}  type="submit">
                  Reset
                </button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
