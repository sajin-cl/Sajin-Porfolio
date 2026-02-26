import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';


const Contact = () => {

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  };


  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setMessage(""), 3000);
      } else {
        setStatus('error');
        setMessage(data.message);
        setTimeout(() => setMessage(""), 3000);
      }

    } catch (err) {
      setStatus('error');
      setMessage("Something went wrong");
      setTimeout(() => setMessage(""), 3000);
    }
  }


  return (
    <section id="contact" className="min-h-screen bg-stone-950 flex items-center justify-center p-4 mx-auto">
      <div className="w-full max-w-lg  rounded-2xl md:p-8 mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}
          className="h1 text-white mb-5 text-center"
        >
          Contact Us
        </motion.h1>
        <div className="text-white text-center mb-5 text-sm">
          <Typewriter
            options={{
              strings: ["Currently seeking job opportunities. Reach out to connect!"],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>

        <div className="border border-lime-300 shadow-xl px-3 w-full p-5 rounded-2xl">
          <form
            onSubmit={submitForm}
            className="flex flex-col gap-3 p-3"
          >
            <div>
              <label className="block text-sm  text-lime-200 mb-1">
                Name :
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border  text-gray-300 text-sm py-4 border-gray-800 rounded-lg px-4  focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm  text-lime-200 mb-1">
                Email :
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@gmail.com"
                className="w-full border  text-gray-300 py-4 text-sm border-gray-800 rounded-lg px-4  focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm  text-lime-200 mb-1">
                Message :
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-800 text-gray-300 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 text-white py-2 rounded-full hover:bg-lime-600 transition duration-200 font-medium"
            >
              Send Message
            </button>
          </form>
          {message && (
            <div
              className={`text-xs mt-3 text-center leading-relaxed tracking-wide flex items-start justify-center gap-1 max-w-sm mx-auto ${status === "success" ? "text-green-500" : "text-red-600"
                }`}
            >
              <FiAlertTriangle size={15} className="shrink-0 mt-0.5" />
              <span>{message}</span>
            </div>
          )}
        </div>



      </div>
    </section>
  );
};


export default Contact;

