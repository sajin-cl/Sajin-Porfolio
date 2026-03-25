import Counter from '@/components/Counter'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { codingProfileData } from '../config/data';

function CodingProfiles() {

  const [start, setStart] = useState(false);//used for counter

  return (
    <motion.section
      id="coding-profiles"
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, amount: 0.6 }}
      className="w-full min-h-[100px] px-6 flex items-center justify-center xl:justify-normal xl:ml-10 md:mb-0 mt-6 mb-5"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-30">
        {codingProfileData.map((prof, idx) => (
          <div key={idx} className="linkedin-stats text-center">
            <h1 className="text-gray-400 text-sm tracking-widest mb-3">
              {prof?.title}
            </h1>
            <span className="inline-block text-lime-300 text-5xl font-bold">
              <Counter value={prof?.count} start={start} />+
            </span>
          </div>
        ))}


      </div>
    </motion.section>
  );
}

export default CodingProfiles;