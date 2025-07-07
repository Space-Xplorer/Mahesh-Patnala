import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import Button3D from "../components/Button3D";
import { Download } from "lucide-react";

const HeroText = () => {
  const words = ["Web Developer", "Designer", "AIML Student"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 ml-10 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space ">
        <motion.h1
          className="text-5xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, It's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Mahesh</span>
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            I am a<span> <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div></span>
          </motion.p>
          
          <motion.p
            className="text-1xl font-medium mt-5 text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            🚀 I build intuitive, scalable, and beautiful digital experiences.  <br/>
            Currently merging AI with design to solve real-world problems.
          </motion.p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 bg-transparent">
            <Button3D
              href="/Patnala Maheshwar-VNRVJIET.pdf"
              download
              className="bg-transparent"
            >
              <Download className="w-5 h-5" />
              Download Résumé
            </Button3D>
            </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col mt-10 space-y-5 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Mahesh
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-200"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black mt-2 text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
