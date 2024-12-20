import React from "react";
import { Font } from "../comuns/Font";
import Button from "../comuns/Button";
import TextAnimation from "./TextAnimation";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useTheme } from "@/app/contexts/LanguageContexts";

const LeftArea = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animationLeft = useAnimation();
  const themeCtx = useTheme();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }
    if (!inView) {
      animationLeft.start({
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.2,
        },
      });
    }
  }, [inView, animationLeft]);

  return (
    <div ref={ref}>
      <motion.div animate={animationLeft} >
        <TextAnimation />
        {themeCtx?.theme === "English" &&
          <>
            <h1 className=" text-3xl  md:text-5xl md:py-4">Welcome</h1>
            <p className=" text-sm  md:text-xl xl:text-xl  py-2">
              I&rsquo;m Gustavo, I&rsquo;m 28 years old and I&rsquo;m studying{" "}
              <Font> Computing  </Font>
              at Universidade Federal Fluminense. I currently use
              <Font> Python,</Font>to carry out projects related to data analysis,
              focusing on
              <Font> Finance and Market Intelligence.</Font>
            </p>
            <Link
              href={"https://sevengusta.github.io/Curriculum-Vitae/"}
              target="_blank"
            >
              <Button>Go to CV</Button>
            </Link>
          </>
        }
        {themeCtx?.theme === "Portuguese" && 
          <>
          <h1 className=" text-3xl  md:text-5xl md:py-4">Seja bem vindo</h1>
          <p className=" text-sm  md:text-xl xl:text-xl  py-2">
            Eu sou o Gustavo, tenho 28 anos de idade e estou cursando{" "}
            <Font> Computação </Font>
            pela Universidade Federal Fluminense. Atualmente utilizo o
            <Font> Python,</Font>para realizar projetos relacionados a análise de
            dados, com enfoque na área
            <Font> de Finanças e de Inteligência de mercado. </Font>
          </p>
          <Link
            href={"https://sevengusta.github.io/Curriculum-Vitae/"}
            target="_blank"
          >
            <Button>Ir para CV</Button>
          </Link>
        
        </>
        }
      </motion.div>
    </div>
  );
};

export default LeftArea;
