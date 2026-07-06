"use client";

import { useState } from "react";

import {
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");


  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Clears previous success/error state
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;


    // Check access key

    if (!accessKey) {
      setStatus("error");
      return;
    }


    // Web3Forms data

    formData.append("access_key", accessKey);

    formData.append(
      "subject",
      "New message from Yogesh Kumar Portfolio"
    );

    formData.append(
      "from_name",
      "Portfolio Contact Form"
    );


    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();


      if (data.success) {
        setStatus("success");

        form.reset();


        // Hide success message after 5 seconds

        setTimeout(() => {
          setStatus("idle");
        }, 5000);

      } else {
        setStatus("error");
      }

    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error
      );

      setStatus("error");
    }
  };


  return (
    <section
      id="contact"
      className="
        mx-auto
        max-w-7xl
        px-4
        py-16
        sm:px-6
        md:py-20
      "
    >

      {/* =====================================================
          HEADING
      ====================================================== */}

      <div
        className="
          mx-auto
          mb-12
          max-w-3xl
          text-center
          sm:mb-16
        "
      >

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-400
          "
        >
          Get In Touch
        </p>


        <h2
          className="
            mt-3
            text-3xl
            font-bold
            sm:text-4xl
          "
        >
          Contact
        </h2>


        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-zinc-400
            sm:mt-5
            sm:text-base
          "
        >
          Available for penetration testing, security research,
          bug bounty collaboration, security consultation,
          and cybersecurity opportunities.
        </p>

      </div>


      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          gap-12
          lg:grid-cols-2
          lg:gap-0
        "
      >

        {/* ===================================================
            LEFT SIDE — FORM
        ==================================================== */}

        <div className="lg:pr-14">

          <div className="mb-7">

            <h3
              className="
                text-xl
                font-semibold
                text-zinc-100
              "
            >
              Send a Message
            </h3>


            <p
              className="
                mt-2
                text-sm
                leading-6
                text-zinc-500
              "
            >
              Have a project, security assessment, or collaboration
              in mind? Send me a message.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Web3Forms Bot Check */}

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />


            {/* Name Fields */}

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
              "
            >

              {/* First Name */}

              <div>

                <label
                  htmlFor="firstName"
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-zinc-500
                  "
                >
                  First Name
                </label>


                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="
                    mt-1.5
                    w-full
                    border-b
                    border-zinc-800
                    bg-transparent
                    py-2
                    text-zinc-200
                    outline-none
                    transition
                    focus:border-cyan-400
                  "
                />

              </div>


              {/* Last Name */}

              <div>

                <label
                  htmlFor="lastName"
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-zinc-500
                  "
                >
                  Last Name
                </label>


                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  required
                  autoComplete="family-name"
                  className="
                    mt-1.5
                    w-full
                    border-b
                    border-zinc-800
                    bg-transparent
                    py-2
                    text-zinc-200
                    outline-none
                    transition
                    focus:border-cyan-400
                  "
                />

              </div>

            </div>


            {/* Email */}

            <div>

              <label
                htmlFor="email"
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-zinc-500
                "
              >
                Email Address
              </label>


              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="
                  mt-1.5
                  w-full
                  border-b
                  border-zinc-800
                  bg-transparent
                  py-2
                  text-zinc-200
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

            </div>


            {/* Message */}

            <div>

              <label
                htmlFor="message"
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-zinc-500
                "
              >
                Your Message
              </label>


              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="
                  mt-1.5
                  w-full
                  resize-none
                  border-b
                  border-zinc-800
                  bg-transparent
                  py-2
                  text-zinc-200
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

            </div>


            {/* Submit Area */}

            <div
              className="
                flex
                flex-col
                items-start
                gap-3
              "
            >

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-cyan-400
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-cyan-300
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {status === "sending"
                  ? "Sending..."
                  : "Send Message"
                }

                <FiSend size={15} />

              </button>


              {/* Success Message */}

              {status === "success" && (
                <p
                  role="status"
                  className="
                    text-sm
                    text-green-400
                  "
                >
                  Message sent successfully. I’ll get back to you soon.
                </p>
              )}


              {/* Error Message */}

              {status === "error" && (
                <p
                  role="alert"
                  className="
                    text-sm
                    text-red-400
                  "
                >
                  Something went wrong. Please try again or contact me
                  directly.
                </p>
              )}

            </div>

          </form>

        </div>


        {/* ===================================================
            RIGHT SIDE — CONTACT DETAILS
        ==================================================== */}

        <div
          className="
            border-t
            border-zinc-800
            pt-9

            lg:border-l
            lg:border-t-0
            lg:pl-14
            lg:pt-0
          "
        >

          <div className="mb-10">

            <h3
              className="
                text-xl
                font-semibold
                text-zinc-100
              "
            >
              Contact Details
            </h3>


            <p
              className="
                mt-2
                max-w-md
                text-sm
                leading-6
                text-zinc-500
              "
            >
              Prefer direct contact? Reach me through email,
              phone, or WhatsApp.
            </p>

          </div>


          <div className="space-y-7 sm:space-y-8">

            {/* Email */}

            <div>

              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                Email
              </p>


              <a
                href="mailto:yogeshkumar.ax@gmail.com"
                className="
                  flex
                  min-w-0
                  items-center
                  gap-3
                  text-sm
                  text-zinc-300
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                  sm:text-base
                "
              >

                <FiMail
                  size={19}
                  className="
                    shrink-0
                    text-red-500
                  "
                />


                <span className="min-w-0 break-all">
                  yogeshkumar.ax@gmail.com
                </span>

              </a>

            </div>


            {/* Phone */}

            <div>

              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                Phone
              </p>


              <a
                href="tel:+919926375741"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-300
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                  sm:text-base
                "
              >

                <FiPhone
                  size={19}
                  className="
                    shrink-0
                    text-red-500
                  "
                />


                <span>
                  +91 9926375741
                </span>

              </a>

            </div>


            {/* WhatsApp */}

            <div>

              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                WhatsApp
              </p>


              <a
                href="https://wa.me/919926375741"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-300
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                  sm:text-base
                "
              >

                <FaWhatsapp
                  size={20}
                  className="
                    shrink-0
                    text-green-500
                  "
                />


                <span>
                  +91 9926375741
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}