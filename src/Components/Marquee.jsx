import { motion } from "framer-motion";

import "./marquee.css";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1> Let's Connect Through Vision . Let's Connect Through Vision . Let's Connect Through Vision . Let's Connect Through Vision . Let's Connect Through Vision .</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;