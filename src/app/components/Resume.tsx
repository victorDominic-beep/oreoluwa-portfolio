import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // This would link to the actual resume file
    alert("Resume download would start here. Please upload your resume PDF and update the link.");
  };

  return (
    <section className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-gradient-to-br from-purple-600 to-teal-600 rounded-2xl p-12 text-center text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.div 
            className="flex justify-center mb-6 relative z-10"
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div 
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl mb-4 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Download My Resume
          </motion.h2>
          <motion.p 
            className="text-purple-100 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Get a detailed overview of my skills, experience, education, and projects. 
            Available in PDF format for easy viewing.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}