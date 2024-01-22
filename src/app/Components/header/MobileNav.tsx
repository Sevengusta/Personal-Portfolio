import React from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import NavName from "./NavName";
import { Font } from "../comuns/Font";
import Link from "next/link";
import { useTheme } from "@/app/contexts/LanguageContexts";
const MobileNav = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const themeCtx = useTheme();

  return (
    <div>
      <div className="relative z-30">
        <motion.button
          onClick={() => toggleMobileNav()}
          animate={mobileNav ? "open" : "closed"}
          className="flex flex-col space-y-1"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="
              w-6 
              h-[4px] 
              rounded 
              block  
              bg-orange-500
            "
          ></motion.span>
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="
              w-6 
              h-[4px] 
              rounded 
              block 
              bg-orange-500
            "
          ></motion.span>
          <motion.span
            variants={{
              closed: { rotate: 0 },
              open: { rotate: -45, y: -8 },
            }}
            className="
              w-6 
              h-[4px] 
              rounded 
              block 
              bg-orange-500
            "
          ></motion.span>
        </motion.button>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              key="mobile-nav"
              className="
              flex 
              flex-col 
              w-full
              md:w-1/3
              px-4
              shadow-md
              bg-gray-800
              text-sm
              z-20
              fixed 
              inset-0
              space-y-10
              justify-center
            "
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.099,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.099,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              exit="closed"
              animate="open"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-5 text-2xl">
                  <NavName onClick={() => toggleMobileNav()} refs={"#home"}>
                    {themeCtx?.theme === 'Portuguese' && <Font>Início</Font> }
                    {themeCtx?.theme === 'English' && <Font>Home</Font> }
                  </NavName>
                  <NavName onClick={() => toggleMobileNav()} refs={"#about"}>
                  {themeCtx?.theme === 'Portuguese' && <Font>Sobre mim</Font> }
                  {themeCtx?.theme === 'English' && <Font>About me</Font> }
                  </NavName>
                  <NavName onClick={() => toggleMobileNav()} refs={"#projects"}>
                  {themeCtx?.theme === 'Portuguese' && <Font>Projetos</Font> }
                  {themeCtx?.theme === 'English' && <Font>Projects</Font> }
                  </NavName>
                  <NavName onClick={() => toggleMobileNav()} refs={"#contact"}>
                  {themeCtx?.theme === 'Portuguese' && <Font>Contatos</Font> }
                  {themeCtx?.theme === 'English' && <Font>Contacts</Font> }
                  </NavName>
                </ul>
              </motion.div>
              <motion.div
                className="text-2xl text-center"
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                {themeCtx?.theme === 'Portuguese' && <Font>Onde eu estou?</Font> }
                {themeCtx?.theme === 'English' && <Font>Where i am?</Font> }
              </motion.div>
              <motion.div
                className="flex justify-center"
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul>
                  <li>
                    <Link
                      className="
                      flex 
                      items-center 
                      gap-2 border 
                      border-t-gray-100 
                      p-1.5 
                      hover:bg-gray-900
                      hover:border-orange-500
                      hover:text-orange-500
                      ease-out
                      transition-all
                      duration-500
                      cursor-pointer
                      m-2
                    "
                      href="Http://wa.me/5521978979860"
                    >
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <linearGradient
                          id="color"
                          x1="100%"
                          y1="100%"
                          x2="0%"
                          y2="0%"
                        >
                          <stop stopColor="#ef4444" offset="50%" />
                          <stop stopColor="#f97316" offset="100%" />
                        </linearGradient>
                        <path
                          d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                          fill="url(#color)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                          fill="url(#color)"
                        />
                      </svg>

                      <div>
                        <h3 className="font-extrabold">WhatsApp</h3>
                        {themeCtx?.theme === 'Portuguese' && <h3>Enviar mensagem</h3> }
                        {themeCtx?.theme === 'English' && <h3>Send message</h3> }    
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="
                  flex 
                  items-center 
                  gap-2 border 
                  border-t-gray-100 
                  p-1.5 
                  hover:bg-gray-900
                  hover:border-orange-500
                  hover:text-orange-500
                  ease-out
                  transition-all
                  duration-500
                  cursor-pointer
                  m-2
                "
                      href={
                        "https://www.linkedin.com/in/gustavo-neves-71388b116/"
                      }
                    >
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="7.025 7.025 497.951 497.951"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                          fill="url(#color)"
                        />
                      </svg>
                      <div>
                        <h3 className="font-extrabold">Linkedin</h3>
                        {themeCtx?.theme === 'Portuguese' && <h3>Clique para ver</h3> }
                        {themeCtx?.theme === 'English' && <h3>Click to show</h3> }    
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="
                  flex 
                  items-center 
                  gap-2 border 
                  border-t-gray-100 
                  p-1.5 
                  hover:bg-gray-900
                  hover:border-orange-500
                  hover:text-orange-500
                  ease-out
                  transition-all
                  duration-500
                  cursor-pointer
                  m-2
                "
                      href={"https://github.com/Sevengusta?tab=repositories"}
                    >
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                          fill="url(#color)"
                        />
                        <path
                          d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                          fill="url(#color)"
                        />
                      </svg>
                      <div>
                        <h3 className="font-extrabold">Github</h3>
                        {themeCtx?.theme === 'Portuguese' && <h3>Clique para ver</h3> }
                        {themeCtx?.theme === 'English' && <h3>Click to show</h3> }    
                      </div>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
