import { Font } from "../comuns/Font";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref, inView } = useInView();
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") : mainControls.start("hidden");
  }, [inView, mainControls]);

  return (
    <div className="container h-[50px]" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-[13px] text-center sm:text-lg lg:text-xl"
      >
          <Font>Desenvolvido por um programador FullStack</Font>
      </motion.div>
    </div>
  );
};
