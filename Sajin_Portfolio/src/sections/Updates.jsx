import { useState } from "react";

function Updates({ visible }) {

  const [showUpdates, setShowUpdates] = useState(visible);


  if (!showUpdates) return null;

  return (
    <section id="updates" className="px-20 mb-5 hidden xl:flex xl:flex-col">
      <div className="flex justify-between w-full relative">
        <h1 className="group text-3xl ml-11 font-bold font-mono mb-3 transform skew-x-[-20deg] cursor-pointer">
          <span className="text-white group-hover:text-lime-300 transition-colors duration-300">
            LATEST
          </span>{" "}
          <span className="text-lime-300 group-hover:text-white transition-colors duration-300">
            UPDATES
          </span>
        </h1>

        <button className="text-lime-300 text-2xl hover:text-red-500 cursor-pointer absolute right-[0]" onClick={()=>setShowUpdates(false)}>X</button>
      </div>
      <div className="update-container border hover:border-lime-300 border-gray-500 p-8 flex gap-5 transform skew-x-[-20deg]">
        <div className="update-img">
          <img
            src="https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto,w_800/images_udbtkq.png"
            alt="latest-update"
            loading="lazy"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>
        <div className="text-white font-mono text-sm">
          <p className="text-lime-300 mb-2 font-bold">
            CURRENTLY IN DEVELOPMENT — AK DECORATION DECORATION SERVICE WEBSITE
          </p>
          <ul className="list-disc  ml-5 space-y-1">
            <li>DESIGNING MODERN AND CLEAN USER INTERFACES</li>
            <li>BUILDING FULLY RESPONSIVE LAYOUTS</li>
            <li>FOCUSING ON PERFORMANCE AND SMOOTH UX</li>
            <li>STRUCTURING SCALABLE COMPONENTS</li>
            <li>CONTINUOUSLY IMPROVING FEATURES AND DESIGN</li>
          </ul>
        </div>
      </div>
    </section>
  )
};


export default Updates;