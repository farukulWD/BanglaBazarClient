import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const ForgotPassModal = ({ closeModal, openLogin }) => {
  const { resetPassword } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    resetPassword(data.email)
      .then((res) => {
        reset();
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Please Check email",
          showConfirmButton: false,
          timer: 1500,
        });
        openLogin();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block  text-primary-color font-bold mb-2"
          >
            Email
          </label>

          <input
            name="email"
            id="email"
            placeholder="Type Your Email"
            type="email"
            {...register("email", { required: true })}
            className={`w-full p-2 rounded border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 mt-2">Email is Required</p>
          )}
        </div>

        <div className="mb-4">
          <button
            disabled={loginUser}
            type="submit"
            className="w-full bg-primary-color text-white p-2 rounded hover:bg-opacity-80"
          >
            {loginUser ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Reset Your Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassModal;
