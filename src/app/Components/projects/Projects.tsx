"use client";
import { useEffect } from "react";
import Show from "./Show";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const { ref, inView } = useInView();
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") : mainControls.start("hidden");
  }, [mainControls, inView]);
  return (
    <div ref={ref}>
      <motion.div
        id="projects"
        className="
        container
        flex 
        flex-col
        py-2
      "
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Show />
      </motion.div>
    </div>
  );
};
