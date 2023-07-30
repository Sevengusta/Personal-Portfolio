import React from "react";
import { Font } from "../comuns/Font";
import Button from "../comuns/Button";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Show = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
          bounce: 0.1,
        },
      });
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animationLeft.start({ x: "-100vw" });
      animationRight.start({ x: "100vw" });
    }
  }, [inView, animationLeft, animationRight]);
  return (
    <div >
      <div className="flex flex-col  gap-2  h-full">
        <h3
          className="
          text-2xl
          sm:text-3xl 
          text-center
          "
        >
          <Font>Projetos </Font>
        </h3>
        <div ref={ref}  className="flex flex-col   w-full">
          <AnimatePresence >

            <motion.div animate={animationLeft}  >
              <div className=" h-full  ">
                <div
                  className="
                  flex  
                  items-center 
                  w-full
                  justify-center
                  group
                "
                >
                  <div
                    className="
                    rounded
                    bg-gradient-to-t
                    from-red-500
                    to-orange-500 
                    relative
                    overflow-hidden
                    p-1
                    my-5
                    m-1
                  "
                  >
                    <div
                      className="
                      flex 
                      flex-col 
                      h-full 
                      justify-end 
                      bg-cover
                      bg-center

                    "
                    >
                      <Image alt="Calculadora Contábil" src={'/images/Calculadora.png'} width={400} height={200} className="w-full h-full" />
                      <div
                        className=" 
                        sm:text-xl
                        text-sm
                        p-4
                        hover:flex 
                        hover:flex-col 
                        hover:ease-in-out 
                        duration-500
                        bg-black/80
                        absolute
                        right-0
                        -bottom-44
                        group-hover:bottom-0
                        w-full

                      "
                      >
                        <Font>
                          Calculadora contábil criada com arquitetura MVC através
                          do Laravel
                        </Font>
                        <div className="gap-3 flex justify-center p-2 ">
                          <Link href={"https://github.com/Sevengusta/Laravel-PHP-calculadora-contabil"} target="_blank" >
                            <Button>Repositório</Button>
                          </Link>
                          <Link href={"https://www.linkedin.com/feed/update/urn:li:activity:7084325121124933632/"} target="_blank">
                            <Button>Ir para Vídeo</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div ref={ref}>

              <motion.div animate={animationRight}>
                <div className=" h-full ">
                  <div
                    className="
                    flex  
                    items-center 
                    w-full
                    justify-center
                    group
                  "
                  >
                    <div
                      className="
                      rounded-md
                      bg-gradient-to-r
                      from-red-500
                      to-orange-500 
                      relative
                      overflow-hidden
                      p-1
                      my-5
                      m-1
                    "
                    >
                      <div
                        className="
                        flex 
                        flex-col 
                        h-full 
                        justify-end 
                        bg-cover
                        bg-center

                      "
                      >
                        <Image alt="Projeto Canil" src={'/images/Canil.png'} width={400} height={200} className="w-full h-full" />
                        <div
                          className=" 
                          p-4
                          sm:text-xl
                          text-sm
                          hover:flex 
                          hover:flex-col 
                          hover:ease-in-out 
                          duration-500
                          bg-black/80
                          absolute
                          right-0
                          -bottom-44
                          group-hover:bottom-0
                          w-full
                        "
                        >
                          
                          <Font>
                            Projeto Elaborado para treinamento da arquitetura MVC
                            com Node.js
                          </Font>
                          <div className="gap-3 flex justify-center p-2 ">
                            <Link href={"https://github.com/Sevengusta/Nodejs-Canil"} target="_blank">
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Show;
