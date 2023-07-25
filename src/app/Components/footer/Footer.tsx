import { Font } from "../comuns/Font";
import {useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";


export const Footer = () => {
  
  return (
    <>
      <div className="container  bg-gray-600 h-[50px]">
        <div className="text-[12px] mx-auto sm:text-lg lg:text-xl">
          <Font>Desenvolvido por um programador FullStack</Font>
        </div>
      </div>
    </>
  );
};
