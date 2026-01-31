import React, { useRef } from "react";

const ContactMe = () => {
  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    // Construct mailto link
    const recipientEmail = "vjnaveen2005@gmail.com";
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Open email client
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className=" h-screen flex flex-col justify-center items-center">
      <div className=" flex flex-col mx-40 not-md:mt-10 h-full justify-evenly">
        <div>
          <div
            id="NySkills-head"
            className=" flex text-5xl text-white gap-2 font-bold"
          >
            <h2>Let's </h2>
            <h2 className=" text-[#FF7F50]">Connect</h2>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 md:gap-30 gap-24 not-md:mt-10">
          <div>
            <form className=" flex flex-col gap-5 " ref={form} onSubmit={handleSendEmail}>
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
                  className=" bg-[#FF7F50] hover:bg-[#ff6250] cursor-pointer rounded-xl text-white text-lg font-bold px-3 py-2 transition-all"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className=" border hover:bg-[#ff7f5094] border-[#FF7F50] cursor-pointer rounded-xl text-white text-lg font-bold px-3 py-2"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className=" flex flex-col justify-evenly not-md:gap-5 not-md:mb-10">
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
