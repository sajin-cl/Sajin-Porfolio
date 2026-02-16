import Typewriter from "typewriter-effect";


const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-stone-950 flex items-center justify-center p-4 mx-auto">
      <div className="w-full max-w-lg  rounded-2xl p-8 mx-auto">
        <h1 className="h1 text-white mb-5 text-center">
          Contact Us
        </h1>
        <div className="text-white text-center mb-5">
          <Typewriter
                options={{
                  strings: ["Feel free to reach out for collaborations & projects"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 60,
                }}
              />
          </div>

        <div className="border border-lime-300 shadow-xl px-3 w-full p-5 rounded-2xl">
          <form className="flex flex-col gap-3 p-3">
            <div>
              <label className="block text-sm  text-lime-200 mb-1">
                Name :
              </label>
              <input
                type="text"
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
                placeholder="your@mail.com"
                className="w-full border  text-gray-300 py-4 text-sm border-gray-800 rounded-lg px-4  focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm  text-lime-200 mb-1">
                Message :
              </label>
              <textarea
                rows="4"
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
        </div>
      </div>
    </section>
  );
};


export default Contact;
