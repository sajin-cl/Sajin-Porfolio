import { useRef, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
import { CONTACT_DETAILS_DATA } from "@/config/data";



const Contact = () => {

  const formRef = useRef(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });


  /* Handle Change function --------> */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  /* Form Submit Code -------->*/
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const formDataToSend = new FormData(formRef.current);

      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_TOKEN);

      formDataToSend.append("subject", "Portfolio Inquiry Confirmation | SAJIN CL");
      formDataToSend.append("from_name", "Portfolio Website");
      formDataToSend.append("replyto", formData?.email);


      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      }
      );

    
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", inquiryType: "", message: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong");
      }


    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong");
    }
    finally {
      setLoading(false);
      setTimeout(() => { setMessage("") }, 3000);
    }

  };


  return (
    <section id="contact" className="min-h-screen bg-stone-950 px-4 pt-20 mt-2">
      <div className="cotact-page-heading relative">

        <span
          className="absolute -top-5 right-10 text-gray-400 text-7xl font-bebas font-bold  opacity-20 pointer-events-none select-none hidden lg:block">
          GET IN TOUCH
          <span className="block text-2xl leading-tight tracking-[0.3em] text-center">FEEL FREE TO TALK</span>
        </span>

        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-5"
        >
          CONTACT <span className="text-lime-300">US</span>
        </motion.h1>

        <div className="text-white mb-5 text-xs font-mono w-full">
          <Typewriter
            options={{
              strings: ["Currently seeking job opportunities. Reach out to connect!".toUpperCase()],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>
      </div>

      <div className="w-full md:p-8 mx-auto grid lg:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div className="contact-info order-2 lg:order-1 w-full p-5 flex flex-col justify-center">
          {CONTACT_DETAILS_DATA.map((cont, idx) => {
            const Icon = cont?.icon;
            return (
              <div
                key={idx}
                className="contact-details flex gap-5 mb-8"
              >
                <div className="contact-icon-box flex items-center">
                  <Icon className="text-lime-300" />
                </div>
                <div className="contact-label-box flex flex-col">
                  <span className="contact-label inline-block text-gray-400 text-xs font-mono mb-2">{cont?.label}</span>
                  <span
                    className="contact-href inline-block text-white text-sm font-mono hover:text-lime-300 hover:cursor-pointer"
                  >
                    {cont.href} ↗
                  </span>
                </div>
              </div>
            )
          })}


          <p className="relative text-xs text-lime-400 tracking-wide font-mono mt-5">
            <span className="inline-block w-2 h-2 bg-lime-400 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#84cc16] mr-2"></span>
            AVAILABLE FOR WORK - FEEL FREE TO CONTACT ME
          </p>

        </div>

        {/* Form Container */}
        <div className="order-1 lg:order-2 shadow-xl  w-full">

          <form
            ref={formRef}
            onSubmit={submitForm}
            className="flex flex-col gap-3 p-3"
          >
            <div>
              <label className="block text-xs font-mono text-lime-200 mb-1">
                NAME :
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border text-gray-300 text-sm py-4 border-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-xs text-lime-200 mb-1">
                EMAIL :
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@gmail.com"
                className="w-full border text-gray-300 py-4 text-xs border-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-xs text-lime-200 mb-1">
                INQUIRY TYPE :
              </label>

              <select
                name="inquiryType"
                required
                value={formData?.inquiryType}
                onChange={handleChange}
                className="w-full border text-gray-500 py-3 text-sm border-gray-800 px-3 bg-stone-950 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <option value="">Select an option</option>
                <option value="HR / Recruitment">
                  HR / Recruitment
                </option>
                <option value="Client / Project Inquiry">
                  Client / Project Inquiry
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-lime-200 mb-1">
                MESSAGE :
              </label>
              <textarea
                rows="4"
                name="message"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-800 text-gray-300 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-lime-400 font-mono  text-black py-2  hover:shadow-[0_0_15px_#84ff00] transition duration-200  cursor-pointer"
            >
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            <p className="mt-2 text-xs font-mono text-gray-400 text-center">
              If you experience any issues with the contact form, please reach out to me directly via
              <a
                className="text-lime-300 underline ml-2 "
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sajincl222@gmail.com&su=Hiring%20Inquiry&body=Hi%20Sajin,%0A%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.">Email</a>.</p>
          </form>

          {message && (
            <div
              className={`text-xs mt-3 text-center leading-relaxed tracking-wide flex items-start justify-center gap-1 max-w-sm mx-auto ${status === "success" ? "text-lime-400" : "text-red-600"
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

