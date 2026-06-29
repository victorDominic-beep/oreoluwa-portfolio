import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import profileImage from "figma:asset/a915634c5590223260383b65bf7b04d5b5942a74.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-400 to-teal-400 rounded-2xl transform rotate-6"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Soyoye Oreoluwa Felicia"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* About Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              {"I'm a Frontend Developer with over two years of experience building responsive and user-friendly web applications. I specialize in React, JavaScript, HTML, CSS, Tailwind CSS, and transforming Figma designs into functional websites."}
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              {"At "}
              <span className="text-purple-600 font-medium">ATB Tech Hub</span>
              {", I have worked as a Frontend Developer, Operations Manager, and Training Tech Facilitator. Beyond developing web applications, I have coordinated training programs, mentored aspiring developers, and supported learners in building practical frontend development skills."}
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
            >
              I enjoy solving real-world problems through technology, writing clean and maintainable code, and continuously learning new tools to improve my skills. My goal is to build fast, accessible, and visually appealing web experiences that make a positive impact.
            </motion.p>
            
            <motion.div 
              className="pt-4 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: "Location", value: "Abeokuta, Ogun State, Nigeria" },
                { label: "Experience", value: "2+ Years" },
                { label: "Organization", value: "ATB Tech Hub" },
                { label: "Focus", value: "Frontend Development" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-500">{item.label}</p>
                  <p className="text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}