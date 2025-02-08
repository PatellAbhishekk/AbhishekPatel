import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Submit from "../components/Submit";
import { FaArrowDown } from "react-icons/fa";

function Contact({ theme }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/aroowlkb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      id="Contact"
      className={`max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <h1 className="animate-text bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-5xl font-black flex flex-col items-center justify-center">
        Contact me
      </h1>
      <br />
      <span className="flex flex-col items-center justify-center">
        Please fill out the form below to contact me
      </span>
      <br />
      <span className="text-2xl flex justify-center items-center">
        <FaArrowDown />
      </span>{" "}
      <br /> <br />
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="https://getform.io/f/aroowlkb"
          method="POST"
          className={`w-96 px-8 py-6 rounded-xl z-10 shadow-lg backdrop-blur-lg ${
            theme === "dark"
              ? "bg-gray-800 border-gray-600"
              : "bg-slate-50 border-white"
          }`}
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label
              className={`block ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              FullName
            </label>
            <input
              {...register("name", { required: true })}
              className={`shadow rounded-lg appearance-none border py-2 px-3 ${
                theme === "dark"
                  ? "text-white bg-gray-700"
                  : "text-gray-700 bg-white"
              } leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className={`block ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              className={`shadow rounded-lg appearance-none border py-2 px-3 ${
                theme === "dark"
                  ? "text-white bg-gray-700"
                  : "text-gray-700 bg-white"
              } leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className={`block ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className={`shadow rounded-lg appearance-none border py-2 px-3 ${
                theme === "dark"
                  ? "text-white bg-gray-700"
                  : "text-gray-700 bg-white"
              } leading-tight focus:outline-none focus:shadow-outline`}
              id="message"
              name="message"
              type="text"
              placeholder="Enter your Query"
            />
            {errors.message && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <span type="submit">
            <Submit />
          </span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
