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
    <div ref={ref}>
      <div className="flex flex-col  gap-2  h-full">
        <h3
          className="
          text-2xl 
          text-center
          "
        >
          <Font>Projetos </Font>
        </h3>
        <div className="flex flex-col xl:flex-row  w-full">
          <motion.div animate={animationLeft}>
            <div className=" h-full ">
              <div
                className="
                mx-auto 
                flex  
                items-center 
                w-full
                justify-center
                group
                px-[37px]
                py-[20px]
              "
              >
                <div
                  className="
                  h-[350px]
                  w-[500px] 
                  show
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
                    justify-end 
                    p-20
                    bg-[url('/images/Calculadora.png')]
                    bg-cover
                    bg-center
                    px-2

                  "
                  >
                    <div
                      className=" 
                      p-4
                      hover:flex 
                      hover:flex-col 
                      hover:ease-in-out 
                      duration-500
                      bg-black/80
                      absolute
                      right-0
                      -bottom-40
                      group-hover:bottom-0

                    "
                    >
                      <Font>
                        Calculadora contábil criada com arquitetura MVC através
                        do Laravel
                      </Font>
                      <div className="gap-3 flex justify-center p-2 ">
                        <Link
                          href={
                            "https://github.com/Sevengusta/Laravel-PHP-calculadora-contabil"
                          }
                        >
                          <Button>Repositório</Button>
                        </Link>
                        <Button>Vídeo</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div animate={animationLeft}>
            <div className=" h-full ">
              <div
                className="
                mx-auto 
                flex  
                items-center 
                w-full
                justify-center
                group
                px-[37px]
                py-[20px]
              "
              >
                <div
                  className="
                  h-[350px]
                  w-[500px] 
                  show
                  
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
                    justify-end 
                    p-20
                    bg-[url('/images/nodejs.png')]
                    bg-cover
                    bg-center
                    px-2

                  "
                  >
                    <div
                      className=" 
                      p-4
                      hover:flex 
                      hover:flex-col 
                      hover:ease-in-out 
                      duration-500
                      bg-black/80
                      absolute
                      right-0
                      -bottom-40
                      group-hover:bottom-0

                    "
                    >
                      <Font>
                        Projeto Elaborado para treinamento da arquitetura MVC
                        com Node.js
                      </Font>
                      <div className="gap-3 flex justify-center p-2 ">
                        <Link href={"https://github.com/Sevengusta/Nodejs-Canil"}>
                          <Button>Repositório</Button>
                        </Link>
                        <Link href={"https://stormy-lamb-bathing-suit.cyclic.app/"}>
                          <Button>Projeto</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Show;
