import { BookOpen, Code, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const milestones = [
  {
    year: "2023",
    title: "Started Learning HTML & CSS",
    description: "Began my journey into web development by mastering the fundamentals of HTML and CSS at ATBTECH Hub.",
    icon: BookOpen,
    color: "from-blue-400 to-blue-600"
  },
  {
    year: "2024",
    title: "Built First React Project",
    description: "Developed my first React application, diving deep into component-based architecture and modern JavaScript.",
    icon: Code,
    color: "from-purple-400 to-purple-600"
  },
  {
    year: "2025",
    title: "Built Responsive Web Applications",
    description: "Developed responsive web applications, converted Figma designs into functional websites, integrated APIs, and improved user experiences using modern frontend technologies.",
    icon: Rocket,
    color: "from-teal-400 to-teal-600"
  },
  {
    year: "2025",
    title: "Mentored and Trained Frontend Developers",
    description: "Supported aspiring frontend developers through practical training, mentorship, and hands-on projects, helping them build strong foundations in HTML, CSS, JavaScript, React, and modern web development.",
    icon: BookOpen,
    color: "from-green-400 to-green-600"
  },
  {
    year: "2026",
    title: "Leading Frontend Training Programs",
    description: "Took on a greater role in training and leading frontend development cohorts, guiding students through structured curriculums covering HTML, CSS, JavaScript, React, and Tailwind CSS — equipping the next generation of developers with industry-ready skills.",
    icon: Rocket,
    color: "from-orange-400 to-pink-500"
  }
];

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-teal-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Growth Journey
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My evolution as a frontend developer over the years
        </motion.p>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-purple-300 to-teal-300"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />
          
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={`${milestone.year}-${index}`}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span 
                        className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-full mb-3"
                        whileHover={{ scale: 1.1 }}
                      >
                        {milestone.year}
                      </motion.span>
                      <h3 className="text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring" }}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}