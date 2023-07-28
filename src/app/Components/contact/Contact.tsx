import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Suport from "./Suport";

const Contact = () => {
  const { ref, inView } = useInView();
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") : mainControls.start("hidden");
  }, [mainControls, inView]);
  return (
    <div ref={ref} id="contact">
      <motion.div
        className="
          container
          flex 
          flex-col-reverse
          xl:flex-col
          xl:flex
        "
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Suport />
      </motion.div>
    </div>
  );
};

export default Contact;
