import { Font } from "../comuns/Font";
import NavName from "./NavName";
import { useEffect } from 'react'
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";


export const Header = () => {
  const { ref, inView } = useInView();
  const mainControls = useAnimation();
  useEffect(() => {
      inView ? mainControls.start ("visible") : mainControls.start( "hidden" )
  },[mainControls, inView])


  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25}}
      >

      <div className="container bg-gray-800 h-[70px]">
        <div className="text-2xl">
          <Font>Portifólio</Font>
        </div>
        <div className="w-2/3">
          <nav className=" hidden md:flex">
            <ul className="nav flex-1 text-2xl ">
              <NavName>
                <Font>Início</Font>
              </NavName>
              <NavName>
                <Font>Sobre mim</Font>
              </NavName>
              <NavName>
                <Font>Projetos</Font>
              </NavName>
              <NavName>
                <Font>Contatos</Font>
              </NavName>
            </ul>
          </nav>
        </div>
      </div>
      </motion.div>
    </div>
  );
};
