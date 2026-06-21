"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactForm = () => {
  type FormFields = {
    name: string;
    email: string;
    number: string;
    description: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    (console.log(data),
      Swal.fire({
        title: "Message Sent!",
        text: "We'll get back to you within 24 hours.",
        icon: "success",
        confirmButtonColor: "#1A3A5C", 
      }));
  };
  return (
    <div className=" min-h-[500px] overflow-hidden py-15 transition-all duration-200 max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <section className="flex flex-col items-center">
        <h1 className="text-2xl text-black py-2 font-semibold">
          {" "}
          Send us a Message
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="flex flex-col lg:flex-row justify-center gap-3 py-3">
            <div className="">
              <input
                {...register("name", { required: "Full Name is Required" })}
                placeholder="Full Name"
                className="border border-gray-300 py-2 px-3 rounded-xl hover:border-blue-400 focus:ring-[#0D9DB8] focus:outline-none focus:ring-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="">
              <input
                {...register("number", {
                  required: "Phone Number is Required",
                  pattern: {
                    value: /^[0-9+\-\s()]{10,}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                placeholder="Phone Number"
                className="border border-gray-300 py-2 px-3 rounded-xl hover:border-blue-400 focus:ring-[#0D9DB8] focus:outline-none focus:ring-2"
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.number.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full">
              <input
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid Email",
                  },
                })}
                placeholder="Email"
                className="w-full border border-gray-300 py-2 px-3 rounded-xl hover:border-blue-400 focus:ring-[#0D9DB8] focus:outline-none focus:ring-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full">
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Description"
                className="w-full border border-gray-300 py-2 min-h-[120px] px-3 rounded-xl focus:ring-[#0D9DB8] focus:outline-none focus:ring-2 hover:border-blue-400 mt-3"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button
              disabled={isSubmitting}
              className="p-2 mt-5 w-full disabled:opacity-80 disabled:hover:scale-100 bg-[#1A3A5C] text-white hover:scale-105 transition-all duration-200 rounded-2xl"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
