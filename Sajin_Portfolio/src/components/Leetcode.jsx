import Typewriter from 'typewriter-effect'

const Leetcode = () => {
  return (
    <section
      id="leetcode"
      className="min-h-screen w-full flex justify-center items-center bg-stone-950"
    >
      <div className="w-full  flex flex-col items-center gap-8 px-4 relative">

        {/* Background Glow */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/40 rounded-full blur-[150px] animate-pulse"></div>

        <h1 className="text-xl md:text-6xl font-bold bg-linear-to-r from-lime-400 via-lime-100 to-gray-500 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: ["50 DAYS LEETCODE CHALLENGE COMPLETED", " SOLVED --85-- PROBLEMS"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>

        <div className="flex justify-center items-center rounded-lg z-5">
          <img src="/leetCodeBadge.gif" alt="" />

        </div>

      </div>
    </section>

  )
};

export default Leetcode;