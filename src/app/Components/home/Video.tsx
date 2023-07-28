import { Font } from "../comuns/Font";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export const Video = () => {
  
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
          duration: 1,
          bounce: 0.5,
        },
      })
    }
    if (!inView) {
      animationRight.start({ x: "100vw" });
    }
  }, [inView, animationRight]);

return (
  <>
      <div ref={ref} className="w-full">
        <motion.div animate={animationRight}>
          <h3
            className="
              text-2xl
              py-2 
              md:text-3xl
              md:py-4
            "
          >
            <Font>Conheça o Gustavo</Font>
          </h3>

          <div
            className="
              mx-auto 
              flex w-full 
              items-center 
              justify-center
            "
          >
            <div
              className="
                h-60 
                w-full
                rounded-md
                bg-gradient-to-r
                from-red-500
                to-orange-500 p-1
              "
            >
              <div 
              className="
                  flex 
                  flex-col 
                  h-full 
                  w-full 
                  items-center 
                  justify-center 
                  bg-gray-800 
                  back
                "
              >
                <h1 className="text-2xl font-black text-white">xxx</h1>
                <h1>assistir vídeo</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
