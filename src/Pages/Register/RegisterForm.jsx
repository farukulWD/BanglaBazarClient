import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="name" className="block primaryTextColor font-bold mb-2">
          Name
        </label>

        <input
          name="name"
          id="name"
          placeholder="Type Your Name"
          type="text"
          {...register("name", { required: true })}
          className={`w-full p-2 rounded border ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />

        {errors.name && <p className="text-red-500 mt-2">Name is Required</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block primaryTextColor font-bold mb-2"
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

        {errors.email && <p className="text-red-500 mt-2">Email is Required</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block primaryTextColor font-bold mb-2"
        >
          Password
        </label>

        <input
          name="password"
          id="password"
          placeholder="Type Your Email"
          type="password"
          {...register("password", { required: true })}
          className={`w-full p-2 rounded border ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />

        {errors.password && (
          <p className="text-red-500 mt-2">Password is Required</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="photo"
          className="block primaryTextColor font-bold mb-2"
        >
          Photo
        </label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          {...register("photo", { required: true })}
          className="w-full p-2 rounded border border-gray-300"
        />
        {errors.photo && <p className="text-red-500 mt-2">Photo is Required</p>}
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full primaryBgColor text-white p-2 rounded hover:bg-opacity-80"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;