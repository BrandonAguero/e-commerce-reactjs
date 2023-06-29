import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth.js";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="min-w-[320px] relative top-16 mm:top-20 flex flex-col items-center gap-1 mm:gap-4 tp:row-start-1 tp:row-end-6 tp:col-start-3 tp:col-end-7 tp:top-32">
      <h2 className="font-serif font-bold text-stone-700 text-2xl w-4/5 gap-1 mm:text-3xl  max-w-[410px]">
        Sign Up
      </h2>
      <form
        className="flex flex-col w-4/5 gap-1 mm:gap-4 max-w-[410px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-base font-serif text-stone-700 mm:text-xl"
          >
            Email
          </label>
          <input
            className="outline-none border-2 rounded-sm focus:shadow-md p-1 mm:p-2"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-base font-serif text-stone-700 mm:text-xl"
          >
            First Name
          </label>
          <input
            className="outline-none border-2 rounded-sm focus:shadow-md p-1 mm:p-2"
            {...register("firstName")}
            type="text"
            id="firstName"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-base font-serif text-stone-700 mm:text-xl"
          >
            Last Name
          </label>
          <input
            className="outline-none border-2 rounded-sm focus:shadow-md p-1 mm:p-2"
            {...register("lastName")}
            type="text"
            id="lastName"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-base font-serif text-stone-700 mm:text-xl"
          >
            Password
          </label>
          <input
            className="outline-none border-2 rounded-sm focus:shadow-md p-1 mm:p-2"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-base font-serif text-stone-700 mm:text-xl"
          >
            Phone (10 characters)
          </label>
          <input
            className="outline-none border-2 rounded-sm focus:shadow-md p-1 mm:p-2"
            {...register("phone")}
            type="number"
            id="phone"
          />
        </div>
        <input
          className="bg-red-500 font-serif font-semibold text-white w-2/4 max-w-[300px] m-auto rounded-sm p-1 cursor-pointer mm:p-2 text-xl hover:brightness-110"
          type="submit"
          value="Sign Up"
        />
      </form>
      <footer className="w-4/5 flex flex-col max-w-[410px]">
        <h4 className="text-sm mm:text-base">
          Already have an account?{" "}
          <Link className="text-blue-400 hover:text-lg" to="/login">
            Login in
          </Link>
        </h4>
      </footer>
    </div>
  );
};

export default RegisterPage;
