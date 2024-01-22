import { photos } from "../data/photo";
import {useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { Font } from "../comuns/Font";
import { PhotoItem } from "./PhotoItem";
import { motion, useScroll } from "framer-motion";


const Certificates = () => {

  return (
    <div className="">
      <h3
        className="
          text-2xl
          sm:text-3xl 
          text-center
          "
      >
        <Font>Experiências </Font>
      </h3>
      
    </div>
  );
};

export default Certificates;
