import React from "react";
import { Font } from "../comuns/Font";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useRef, useEffect } from 'react'
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
          duration: 1,
          bounce: 0.5,
        },
      });
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animationLeft.start({ x: "-100vw" });
      animationRight.start({ x: "100vw" });
    }
  }, [inView, animationLeft, animationRight]);
  return (
    <div className="flex flex-col sm:flex-row justify-around w-full" >
      <h3
        ref={ref}
        className="
          text-lg 
          sm:text-xl
          text-center 
          md:text-2xl
        "
      >
        <Font>Ciências Contábeis</Font>
        <motion.div  animate={animationLeft}>
          <Image
            alt="UFRJ"
            src={"/images/UFRJ.png"}
            width={250}
            height={150}
            className="m-auto w-1/2 sm:w-full"
          />
        </motion.div>
        <Font>08/2019 - 12/2022</Font>
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
        <Font>Computação</Font>
        <motion.div animate={animationRight}>
          <Image
            className="m-auto py-[10px] w-1/4 sm:w-1/2 "
            alt="UFF"
            src={"/images/UFF.png"}
            width={130}
            height={127}
          />
        </motion.div>
        <Font>08/2023 - 12/2026</Font>
      </h3>
    </div>
  );
};

export default Academy;
