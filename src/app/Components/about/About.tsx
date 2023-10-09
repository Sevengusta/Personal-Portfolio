import { Font } from "../comuns/Font";
import Academy from "./Academy";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") :  mainControls.start( "hidden" )
  }, [inView, mainControls]);
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
            text-2xl 
            py-2 
            md:text-3xl 
            md:pb-2
          "
          >
            <Font>Formação acadêmica</Font>
          </h3>
          <p className=" text-sm  md:text-xl xl:text-xl  py-2">
            Meu objetivo atual é me realocar no mercado de trabalho em São Paulo e desenvolver 
            as minhas habilidades profissionais mais valiosas: analisar e transformar dados.
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
          <div className="w-full">
            <h3
              className="
              text-2xl 
              py-2 
              md:text-3xl 
              md:pb-2
            "
            >
              <Font>Stacks</Font>
            </h3>
            <p
              className="
              text-sm  
              md:text-xl 
              xl:text-xl 
              py-2
            "
            >
              Minha especialidade é a criação de dashboards dinâmicos com a linguagem Python. 
              Gosto de aprender sobre Data Science e tenho sólidos conhecimentos nas linguagens Javascript e PHP. 
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
