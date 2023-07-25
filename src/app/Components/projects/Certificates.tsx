import { photos } from "../data/photo";
import {useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { Font } from "../comuns/Font";
import { PhotoItem } from "./PhotoItem";
import { motion, useScroll } from "framer-motion";


const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current?.offsetWidth);
    }
  }, []);
  

  const openModal = (id: number) => {
    const photo = photos.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <h3
        className="
          text-xl 
          md:text-2xl 
          text-center
          "
      >
        <Font>Certificados </Font>
      </h3>
      <motion.div
        ref={carousel}
        className="carousel"
      >
        {/* área do overflow */}
        <motion.div
          drag={"x"}
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{cursor: "grabbing"}}
          className="inner-carousel"
        >
          {photos.map((item) => (
            <motion.div key={item.id} className="item flex">
                <PhotoItem photo={item} abrir={() => openModal(item.id)} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {showModal && <Modal image={imageOfModal} fechar={closeModal} />}
    </div>
  );
};

export default Certificates;
