"use client";

import React, { useState } from "react";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import Image from "next/image";
import { ContactFormData, contactFormSchema } from "@/types/ContactFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const onSubmit = async (data: ContactFormData) => {
    setFeedback({ type: "", message: "" });
    const backendUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

    if (!backendUrl.length) {
      throw new Error("where the fuck is the backend url!!!!");
      return;
    }

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || `server error: ${response.status}`);
      }

      setFeedback({ type: "success", message: "Message sent successfully" });
      reset();
    } catch (error) {
      console.log("Submission error:", error);
      if (error instanceof Error) {
        setFeedback({ type: "error", message: error.message });
      }
    }
  };

  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image
              src={phone}
              alt="phone"
              className="h-[72px] md:h-[110px] w-auto mr-6"
            />
            <p className="md:text-xl">+62 82447292896</p>
          </li>
          <li className="flex items-center">
            <Image
              src={mail}
              alt="mail"
              className="h-[72px] md:h-[110px] w-auto mr-6"
            />
            <p className="md:text-xl">afrasuperblack@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let&#39;s connect
        </h2>
        <p className="text-white/70 mb-6 ">Send me a message</p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="First Name"
              type="text"
              {...register("firstName")}
            />
            <input
              className="bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Last Name"
              {...register("lastName")}
              type="text"
            />
            <input
              className="bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email"
              {...register("email")}
              type="email"
            />
            <input
              className="bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Phone"
              {...register("phone")}
              type="tel"
            />
          </div>
          <textarea
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Message"
            rows={5}
            {...register("message")}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {feedback.message && (
            <p
              className={`text-center ${
                feedback.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {feedback.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
