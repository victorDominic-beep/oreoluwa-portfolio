import { Code2, Palette, Smartphone, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", category: "Frontend", icon: Code2, color: "from-orange-400 to-orange-600" },
  { name: "CSS", category: "Styling", icon: Palette, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", category: "Programming", icon: Code2, color: "from-yellow-400 to-yellow-600" },
  { name: "React", category: "Framework", icon: Code2, color: "from-cyan-400 to-cyan-600" },
  { name: "Tailwind CSS", category: "Styling", icon: Palette, color: "from-teal-400 to-teal-600" },
  { name: "Git", category: "Version Control", icon: GitBranch, color: "from-red-400 to-red-600" },
  { name: "GitHub", category: "Platform", icon: GitBranch, color: "from-gray-600 to-gray-800" },
  { name: "Responsive Design", category: "Concept", icon: Smartphone, color: "from-purple-400 to-purple-600" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A comprehensive set of tools and technologies I use to bring ideas to life
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-gray-800 mb-1">{skill.name}</h3>
                <p className="text-gray-500 text-sm">{skill.category}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}