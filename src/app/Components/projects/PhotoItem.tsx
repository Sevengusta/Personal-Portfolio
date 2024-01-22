"use client";
import Image from "next/image";
import { Photo } from "../data/experiencesData";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  photo: Photo;
  abrir: () => void;
};

export const PhotoItem = ({ photo, abrir }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      })
    }
    if (!inView) {
      animationRight.start({
         x: "300vw",
         transition: {
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        },
         });
    }
  }, [inView, animationRight]);

  return (
    <div onClick={abrir} ref={ref} className="hover:opacity-80 cursor-grab ">
      <motion.div animate={animationRight}>
        <Image
          width={400}
          height={200}
          onClick={abrir}
          src={`${photo.url}`}
          alt=""
          className=" w-full"
        />
      </motion.div>
    </div>
  );
};
