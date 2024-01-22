import React from "react";
import { Font } from "../comuns/Font";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import Image from "next/image";

const Academy = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      });
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animationLeft.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 1,
        },
      });
      animationRight.start({
        x: "100vw",
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
  }, [inView, animationLeft, animationRight]);
  return (
    <div className="flex flex-col sm:flex-row justify-around w-full">
      <h3
        ref={ref}
        className="
          text-lg 
          sm:text-xl
          md:text-2xl
          text-center 
        "
      >
        <motion.div animate={animationLeft}>
          <Font>Ciências Contábeis</Font>
          <Image
            alt="UFRJ"
            src={"/images/UFRJ.png"}
            width={250}
            height={150}
            className="m-auto w-1/2 sm:w-full"
          />
          <Font>08/2019 - 12/2022</Font>
        </motion.div>
      </h3>
      <h3
        ref={ref}
        className="
          text-lg 
          sm:text-xl
          text-center 
          md:text-2xl
        "
      >
        <motion.div animate={animationRight}>
          <Font>Computação - EAD</Font>
          <Image
            className="m-auto py-[10px] w-1/4 sm:w-1/2 "
            alt="UFF"
            src={"/images/UFF.png"}
            width={130}
            height={127}
          />
          <Font>08/2023 - 08/2026</Font>
        </motion.div>
      </h3>
    </div>
  );
};

export default Academy;
