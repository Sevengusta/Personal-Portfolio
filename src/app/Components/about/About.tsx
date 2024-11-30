import { Font } from "../comuns/Font";
import Academy from "./Academy";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";
import { useTheme } from "@/app/contexts/LanguageContexts";

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") : mainControls.start("hidden");
  }, [inView, mainControls]);

  const themeCtx = useTheme();
  return (
    <div ref={ref} id="about">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="
          container
          flex 
          flex-col
        "
      >
        <div className="w-full">
          <h3
            className="
            py-2 
            text-2xl 
            md:text-3xl 
            md:pb-2
          "
          >
            
            {themeCtx?.theme === 'English' && <Font>Education</Font>}
            {themeCtx?.theme === 'Portuguese' && <Font>Formação acadêmica</Font>}
          </h3>
          <p className=" text-sm  md:text-xl xl:text-xl  py-2">

            {themeCtx?.theme === 'English' && 
            'My current goal is to continue developing innovative solutions in \
            Data Science area, focusing on analyzing and transforming data.'
            }
            {themeCtx?.theme === 'Portuguese' && 
            'Meu objetivo atual é continuar desenvolvendo soluções inovadoras na \
            área de Ciência de Dados, com foco na análise e transformação de dados.'
            }

          </p>
          <div
            className="
            flex 
            flex-col 
            sm:flex-row 
            justify-around
          "
          >
            <Academy />
          </div>
          <Experience />



          <div className="w-full">
            <h3
              className="
              text-2xl 
              py-2 
              md:text-3xl 
              md:pb-2
            "
            >
              {themeCtx?.theme === 'English' && <Font>Stacks</Font>}
              {themeCtx?.theme === 'Portuguese' && <Font>Conhecimentos</Font>}
              
            </h3>
            <p
              className="
              text-sm  
              md:text-xl 
              xl:text-xl 
              py-2
            "
            >
            {themeCtx?.theme === 'Portuguese' && 
            'Minha especialidade é a criação de dashboards dinâmicos com a \
            linguagem Python. Além disso, desenvolvo soluções web com o uso de \
            Machine Learning com a implantação em ambientes de nuvem (AWS e GCP).'
            }
            {themeCtx?.theme === 'English' && 
            'My specialty is create dynamic dashboards with the Python language. \
             Additionally, i develop web solutions using Machine Learning  \
            with deployment in cloud environments (AWS and GCP),'
            }
            </p>
          </div>
          <div
            className="
            flex 
            flex-col 
            sm:flex-row 
            justify-around
          "
          >
            <div
              className="
              flex 
              flex-col 
              justify-around
              w-full
              sm:w-1/2
              text-center
            "
            >
              <h3 className="text-xl py-2 md:text-2xl md:pb-8">
                <Languages />
              </h3>
            </div>
            <div
              className="
              flex 
              flex-col 
              justify-around
              w-full
              sm:w-1/2
              text-center
            "
            >
              <h3 className="text-xl py-2 md:text-2xl md:pb-8">
                <Frameworks />
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
