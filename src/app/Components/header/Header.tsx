import { Font } from "../comuns/Font";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MobileButton from "./MobileNav";
import { LanguageBtn } from "./LanguageBtn";
import { useTheme } from "@/app/contexts/LanguageContexts";

export const Header = () => {
  const { ref, inView } = useInView();
  // const mainControls = useAnimation();
  // useEffect(() => {
  //   inView ? mainControls.start("visible") : mainControls.start("hidden");
  // }, [mainControls, inView]);
  const themeCtx = useTheme();
  const setPortuguese = () => {
    if (themeCtx) {
      themeCtx.setTheme("Portuguese");
    }
  };
  const setEnglish = () => {
    if (themeCtx) {
      themeCtx.setTheme("English");
    }
  };

  return (
    <div ref={ref}>
      <div>
        <div className="container h-[70px]">
          <div className="text-2xl ">
            {themeCtx?.theme === "Portuguese" ? <Font> Portfólio </Font> : <Font> Portfolio </Font>}
          </div>
          <div className="w-24 flex justify-between">
            <LanguageBtn src="/images/BR.png" onClick={() => {setPortuguese();
              }}
            />
            <LanguageBtn src="/images/US.png" onClick={() => {setEnglish();}}
            />
            <MobileButton />
          </div>
        </div>
      </div>
    </div>
  );
};
