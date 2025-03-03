import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hzli9mk", "template_sc9tmtr", form.current, {
        publicKey: "j2k8ApJEWdTYJ7gg4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setIsSuccessful(true);
          setTimeout(() => {  
            setIsSuccessful(false);
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <section className=" h-screen flex flex-col justify-center items-center">
      <div className=" fixed top-5 right-5">
        <div
          className={`${
            isSuccessful ? "bg-[#FF7F50]" : "bg-[#FF7F50] hidden"
          } text-white text-lg font-bold px-3 py-2 rounded-xl transition-all`}
        >
          Email Sent Successfully!
        </div>
      </div>
      <div className=" flex flex-col mx-40 h-full justify-evenly">
        <div>
          <div
            id="NySkills-head"
            className=" flex text-5xl text-white gap-2 font-bold"
          >
            <h2>Let's </h2>
            <h2 className=" text-[#FF7F50]">Connect</h2>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-30">
          <div>
            <form className=" flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                className=" bg-[#1A1A1A] border border-[#242932] w-full rounded-xl text-white text-xl p-2"
                placeholder="Your Name"
                name="user_name"
                required
              />
              <input
                type="email"
                className=" bg-[#1A1A1A] border border-[#242932] w-full rounded-xl text-white text-xl p-2"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <textarea
                type="text"
                className=" bg-[#1A1A1A] border border-[#242932] h-[30vh] w-full rounded-xl text-white text-xl p-2"
                placeholder="Your Message"
                name="message"
                required
              />
              <div className=" flex gap-5">
                <button
                  type="submit"
                  className=" bg-[#FF7F50] cursor-pointer rounded-xl text-white text-lg font-bold px-3 py-2"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className=" border hover:bg-[#ff7f5094] border-[#FF7F50] cursor-pointer rounded-xl text-white text-lg font-bold px-3 py-2"
                >
                  Reset Message
                </button>
              </div>
            </form>
          </div>
          <div className=" flex flex-col justify-evenly">
            <div className=" flex flex-col gap-4 border bg-[#1A1A1A] border-[#FF7F50] p-5 rounded-xl">
              <div className=" text-2xl font-bold text-[#FF7F50]">
                Get in Touch
              </div>
              <div className=" text-[#D1D2D0] font-semibold text-md">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex gap-3 items-center">
                <img
                  className=" w-6"
                  src="https://img.icons8.com/?size=100&id=86840&format=png&color=FF7F50"
                  alt=""
                />
                <h4 className=" text-md text-[#d5d5d5]">
                  vjnaveen2005@gmail.com
                </h4>
              </div>
              <div className=" flex gap-3 items-center">
                <img
                  className=" w-6"
                  src="https://img.icons8.com/?size=100&id=3723&format=png&color=FF7F50"
                  alt=""
                />
                <h4 className=" text-md text-[#d5d5d5]">India</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
