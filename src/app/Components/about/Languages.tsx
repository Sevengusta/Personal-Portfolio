import React from "react";
import { Font } from "../comuns/Font";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/app/contexts/LanguageContexts";

export const Languages = () => {
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
          duration: 2,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animationLeft.start({
        x: "-100vw",
      });
    }
  }, [inView, animationLeft]);
  const themeCtx = useTheme();
  return (
    <div ref={ref}>
      <motion.div animate={animationLeft}>
        <div>
            {themeCtx?.theme === 'English' && <Font>Languages</Font>}  
            {themeCtx?.theme === 'Portuguese' && <Font>Linguagens</Font>}
          
          <div className="flex gap-4 justify-around mt-2 sm:text-xl text-lg">
            <div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="80" 
              width="80" 
              viewBox="-108.1641 -139.0155 937.4222 834.093"
              fill="url(#color)"
              className="ease-out duration-300 cursor-pointer transform hover:scale-125 m-auto w-[80px] sm:w-[100px]"
            >
              <linearGradient id="color" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#ef4444" offset="50%" />
                <stop stopColor="#f97316" offset="100%" />
              </linearGradient>
              <path d="M360.547 482.937C161.423 482.937 0 374.828 0 241.469 0 108.109 161.423 0 360.547 0c199.125 0 360.547 108.109 360.547 241.469 0 133.359-161.422 241.468-360.547 241.468zm55.188-388.531c-151.352 0-274.047 73.908-274.047 165.078s122.695 165.078 274.047 165.078c151.351 0 263.046-50.529 263.046-165.078 0-114.513-111.695-165.078-263.046-165.078z"/>
              <path  d="M549.094 374s21.822 6.585 34.5 13c4.399 2.226 12.01 6.668 17.5 12.5 5.378 5.712 8 11.5 8 11.5l86 145-139 .062-65-122.062s-13.31-22.869-21.5-29.5c-6.832-5.531-9.745-7.5-16.5-7.5h-33.026l.026 158.974-123 .052V149.938h247s112.5 2.029 112.5 109.062-107.5 115-107.5 115zm-53.5-135.976l-74.463-.048-.037 69.05 74.5-.024s34.5-.107 34.5-35.125c0-35.722-34.5-33.853-34.5-33.853z"/>
            </svg>
            <Font>R</Font>
            </div>
            
            <div>
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="ease-out duration-300 cursor-pointer transform hover:scale-125 m-auto w-[60px] sm:w-[70px]"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-340.000000, -7599.000000)"
                    fill="url(#color)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <Font>Python</Font>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Languages;
