import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "../types/ContactFormSchema";
const ContactSection = () => {
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
    const backendUrl = import.meta.env.PUBLIC_API_URL ?? "";

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
    <section id="contacts" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-text-muted">
          <span className="text-accent">$</span> echo "contacts.sh"
        </div>

        <h2 className="text-3xl font-semibold mb-4">
          Let's <span className="text-accent">connect</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div></div>
          <div className="p-6 space-y-4">
            <ul className="space-y-4">
              <li className="flex items-center">
                <MdEmail size={24} className="mr-4" />
                <p className="md:text-xl">afrasuperblack@gmail.com</p>
              </li>
            </ul>
            <p className="text-text-muted mb-6">Send me a message</p>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="bg-transparent border border-border p-3 focus:outline-none focus:ring-2 focus:ring-blue text-text"
                  placeholder="First Name"
                  type="text"
                  {...register("firstName")}
                />
                <input
                  className="bg-transparent border border-border p-3 focus:outline-none focus:ring-2 focus:ring-blue text-text"
                  placeholder="Last Name"
                  {...register("lastName")}
                  type="text"
                />
                <input
                  className="bg-transparent border border-border p-3 focus:outline-none focus:ring-2 focus:ring-blue text-text"
                  placeholder="Email"
                  {...register("email")}
                  type="email"
                />
                <input
                  className="bg-transparent border border-border p-3 focus:outline-none focus:ring-2 focus:ring-blue text-text"
                  placeholder="Phone"
                  {...register("phone")}
                  type="tel"
                />
              </div>
              <textarea
                className="w-full bg-transparent border border-border p-3 focus:outline-none focus:ring-2 focus:ring-blue text-text"
                placeholder="Your Message"
                rows={5}
                {...register("message")}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-hover text-bg px-6 py-2 w-full font-semibold rounded"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {feedback.message && (
                <p
                  className={`text-center ${
                    feedback.type === "success" ? "text-accent" : "text-red-500"
                  }`}
                >
                  {feedback.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
