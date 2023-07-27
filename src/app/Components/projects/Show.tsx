import React from "react";
import { Font } from "../comuns/Font";
import Button from "../comuns/Button";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";


const Show = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animationLeft = useAnimation();
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
    }
    if (!inView) {
      animationLeft.start({ x: "-100vw" });
    }
  }, [inView, animationLeft]);
  return (
    <div ref={ref} className="w-[500px] max-w-full h-full" >
      <motion.div
      
      animate={animationLeft}
      >

        <h3
          className="
            text-xl 
            md:text-2xl 
            text-center
            pb-4
            "
        >
          <Font>Projetos</Font>
        </h3>
        <div className="w-[500px] max-w-full h-full pb-4">
          <div
            className="
              mx-auto 
              flex w-[500px] max-w-full 
              items-center 
              justify-center
              group
              cursor-pointer
            "
          >
            <div
              className="
                h-60 
                w-[500px] max-w-full
                rounded-md
                bg-gradient-to-r
                from-red-500
                to-orange-500 
                relative
                overflow-hidden
                p-1
              "
            >
              <div
                className="
                  flex 
                  flex-col 
                  h-full 
                  w-[fit] 
                  justify-end 
                  bg-gray-800 
                  bg-[url('/images/Calculadora.png')]
                  bg-cover
                  overflow-hidden
                  px-2

                "
              >
                <div 
                  className=" 
                    text-center 
                    hover:flex 
                    hover:flex-col 
                    hover:ease-in-out 
                    duration-500
                    bg-black/80
                    absolute
                    right-0
                    -bottom-32
                    group-hover:bottom-0

                  "
                >

                  <Font> Calculadora contábil criada com arquitetura MVC através do Laravel</Font>
                  <div className="gap-3 flex p-2 ">
                    <Link href={"https://github.com/Sevengusta/Laravel-PHP-calculadora-contabil"} >
                      <Button >Repositório</Button>
                    </Link>
                    <Button>Vídeo</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Show;
