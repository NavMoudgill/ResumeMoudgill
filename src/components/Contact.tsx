import React, { useState } from "react";

import emailjs from "@emailjs/browser";
interface FormTypes {
  name: String;
  email: String;
  message: String;
}
const Contact = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}): React.ReactElement => {
  const [form, setForm] = useState<FormTypes>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_REACT_APP_SERVICE_ID);
    console.log(form);
    const { name, email, message } = form;
    try {
      const templateParams = {
        from_name: name,
        to_name: import.meta.env.VITE_REACT_APP_NAME,
        from_email: email,
        to_email: import.meta.env.VITE_REACT_APP_EMAIL,
        message: message,
      };
      if (!name || name.trim() === "" || name.length < 3) {
        return alert("Please enter a valid name");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || email.trim() === "" || !emailRegex.test(email as string)) {
        return alert("Please enter a valid email address");
      }
      if (!message || message.trim() === "" || message.length < 3) {
        return alert("Please enter a valid message");
      }
      const response = await emailjs.send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_REACT_APP_USER_KEY
      );

      if (response) {
        alert("Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative text-white  justify-center flex flex-col items-start  bg-black min-h-[85vh] lg:h-full">
      <video
        muted
        autoPlay
        loop
        className="min-h-[85vh] object-cover lg:h-full"
      >
        <source src="contact.mp4" type="video/mp4" />
      </video>
      <div className=" absolute top-0 left-0  flex flex-col justify-between w-[100%] px-14 py-10 object-cover my-auto h-full">
        <h1 className="top-0 left-0 mb-5  text-3xl card" ref={val}>
          Contatto
        </h1>
        <h1 className="text-xl sm:text-2xl ">Your name</h1>
        <input
          placeholder="Type your name here"
          type="text"
          name="name"
          onChange={handleChange}
          className="text-black w-[80%] sm:w-[45%]  xl:[w-35%] rounded-lg p-2 z-50 my-2 focus:outline-none hover:bg-gradient-to-r from-[#7B68EE] via-[#000080] to-[#AFEEEE]  hover:text-white"
          value={`${form.name}`}
        />
        <h1 className="text-xl sm:text-2xl ">Your email</h1>
        <input
          placeholder="Type your email here"
          type="text"
          name="email"
          onChange={handleChange}
          className="text-black w-[80%]  sm:w-[45%]  xl:[w-35%] rounded-lg p-2 my-2  hover:text-white focus:outline-none hover:bg-gradient-to-r from-[#7B68EE] via-[#000080] to-[#AFEEEE]"
          value={`${form.email}`}
        />
        <h1 className="text-xl sm:text-2xl ">Your message</h1>
        <textarea
          placeholder="Type your message here"
          name="message"
          rows={5}
          cols={50}
          onChange={handleChange}
          className="text-black w-[80%]  sm:w-[45%]  xl:[w-35%] rounded-lg p-2  my-2  hover:text-white focus:outline-none hover:bg-gradient-to-r from-[#7B68EE] via-[#000080] to-[#AFEEEE]"
          value={`${form.message}`}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center text-white p-3 my-3 px-6 rounded-sm w-[40%] sm:w-[20%]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
