import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
import { CONTACT_DETAILS_DATA } from "@/config/data";



const Contact = () => {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
      const response = await fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_FORMSUBMIT_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData?.name,
            email: formData?.email,
            message: formData?.message,

            _subject: "Portfolio Inquiry Confirmation | SAJIN CL",
            _template: "table",
            _captcha: "false",

            _replyto: formData?.email,
            _autoresponse: `Hi ${formData.name},

Thank you for reaching out through my portfolio website.

I have received your message and will contact you shortly.
`

          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", });
      }
      else {
        setStatus("error");
        setMessage(result.message || "Failed to send message");
      }

    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }

    setTimeout(() => { setMessage("") }, 3000);
  };

  console.log('token ---TOKEN:', import.meta.env.VITE_FORMSUBMIT_TOKEN);

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
                className="contact-details flex gap-5 mb-5"
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

          <div className="point relative p-2 border border-lime-800 overflow-hidden mt-14">

            <div className="absolute inset-0 border border-lime-400 opacity-30 animate-[spin_4s_linear_infinite]"></div>

            <p className="relative text-xs text-lime-400 tracking-wide font-mono">
              <span className="inline-block w-2 h-2 bg-lime-400 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#84cc16] mr-2"></span>
              AVAILABLE FOR WORK - FEEL FREE TO CONTACT ME
            </p>
          </div>

        </div>

        {/* Form Container */}
        <div className="order-1 lg:order-2 shadow-xl  w-full">

          <form
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
                autoComplete="new-name"
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
                autoComplete="new-email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@gmail.com"
                className="w-full border text-gray-300 py-4 text-xs border-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
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

