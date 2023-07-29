import { Font } from "../comuns/Font";
import NavName from "./NavName";
import { motion, useAnimation,  } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import MobileBar from "./MobileNav";
import MobileButton from "./MobileNav";


export const Header = () => {
  

  const { ref, inView } = useInView();
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") : mainControls.start("hidden");
  }, [mainControls, inView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="container h-[70px]">
          <div className="text-2xl">
            <Font>Portfólio</Font>
          </div>
          <MobileButton />
        </div>
      </motion.div>
    </div>
  );
};
