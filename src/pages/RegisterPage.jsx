import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

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
    <div className="relative top-16 flex min-w-[320px] flex-col items-center gap-1 ms:top-20 ms:gap-3 mm:top-20 mm:gap-4 tp:top-32 tp:col-start-3 tp:col-end-7 tp:row-start-1 tp:row-end-6">
      <h2 className="w-4/5 max-w-[410px] gap-1 font-serif text-2xl font-bold text-stone-700  mm:text-3xl">
        Sign Up
      </h2>
      <form
        className="flex w-4/5 max-w-[410px] flex-col gap-1 ms:gap-3 mm:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="font-serif text-base text-stone-700 mm:text-xl"
          >
            Email
          </label>
          <input
            className="rounded-sm border-2 p-1 outline-none focus:shadow-md mm:p-2"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="font-serif text-base text-stone-700 mm:text-xl"
          >
            First Name
          </label>
          <input
            className="rounded-sm border-2 p-1 outline-none focus:shadow-md mm:p-2"
            {...register("firstName")}
            type="text"
            id="firstName"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="font-serif text-base text-stone-700 mm:text-xl"
          >
            Last Name
          </label>
          <input
            className="rounded-sm border-2 p-1 outline-none focus:shadow-md mm:p-2"
            {...register("lastName")}
            type="text"
            id="lastName"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="font-serif text-base text-stone-700 mm:text-xl"
          >
            Password
          </label>
          <input
            className="rounded-sm border-2 p-1 outline-none focus:shadow-md mm:p-2"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="font-serif text-base text-stone-700 mm:text-xl"
          >
            Phone (10 characters)
          </label>
          <input
            className="rounded-sm border-2 p-1 outline-none focus:shadow-md mm:p-2"
            {...register("phone")}
            type="number"
            id="phone"
          />
        </div>
        <input
          className="m-auto w-2/4 max-w-[300px] cursor-pointer rounded-sm bg-red-500 p-1 font-serif text-xl font-semibold text-white hover:brightness-110 mm:p-2"
          type="submit"
          value="Sign Up"
        />
      </form>
      <footer className="flex w-4/5 max-w-[410px] flex-col">
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
