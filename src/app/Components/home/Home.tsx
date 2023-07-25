import { Video } from "./Video";
import LeftArea from "./LeftArea";
import { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";





export const Home = () => {
  const { ref, inView } = useInView({threshold: 0.2,});
  const mainControls = useAnimation();
  useEffect(() => {
    inView ? mainControls.start("visible") :  mainControls.start( "hidden" )
  }, [ mainControls,inView])
  return (
      <div ref={ref} >
        <motion.div 
          className="
          container
          bg-gray-600
          flex 
          flex-col
          xl:grid
          xl:grid-cols-2
          xl:gap-5
        "
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        >
          <LeftArea />
          <Video />

        </motion.div>
      </div>
  );
};
