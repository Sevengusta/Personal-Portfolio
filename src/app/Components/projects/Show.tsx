import React from "react";
import { Font } from "../comuns/Font";
import Button from "../comuns/Button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/contexts/LanguageContexts";

const Show = () => {
  const themeCtx = useTheme()
  return (
    <div>
      <div className="flex flex-col  gap-2  h-full">
        <h3
          className="
          text-2xl
          sm:text-3xl 
          text-center
          "
        >
          {themeCtx?.theme === 'English' && <Font>Projects </Font>}
          {themeCtx?.theme === 'Portuguese' && <Font>Projetos </Font>}
          
        </h3>
        <div className="flex flex-col h-full  w-full">
          <div className=" h-full  ">
            <div
              className="
                  flex  
                  items-center 
                  w-full
                  justify-center
                  group
                "
            >
              <div
                className="
                    rounded
                    bg-gradient-to-t
                    from-red-500
                    to-orange-500 
                    relative
                    overflow-hidden
                    p-1
                    my-5
                    m-1
                  "
              >
                <div
                  className="
                      flex 
                      flex-col 
                      h-full 
                      justify-end 
                      bg-cover
                      bg-center

                    "
                >
                  <Image
                    alt="Calculadora Contábil"
                    src={"/images/stock_market1.png"}
                    width={400}
                    height={200}
                    className="w-full h-full"
                  />
                  <div
                    className=" 
                        sm:text-xl
                        text-sm
                        p-4
                        hover:flex 
                        hover:flex-col 
                        hover:ease-in-out 
                        duration-500
                        bg-black/80
                        absolute
                        right-0
                        -bottom-44
                        group-hover:bottom-0
                        w-full

                      "
                  >
                    <Font>
                      Análise de ações, consumindo a API de ações Yahoo Finance
                      e utilizando a biblioteca Dash para visualização dos
                      gráficos
                    </Font>
                    <div className="gap-3 flex justify-center p-1 ">
                      <Link
                        href={"https://github.com/Sevengusta/stocks"}
                        target="_blank"
                      >
                        <Button>Repositório</Button>
                      </Link>
                      <Link
                        href={
                          "https://www.linkedin.com/feed/update/urn:li:activity:7149911944345423872/"
                        }
                        target="_blank"
                      >
                        <Button>Ir para Vídeo</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-full ">
            <div
              className="
                  flex  
                  items-center 
                  w-full
                  justify-center
                  group
                "
            >
              <div
                className="
                    rounded-md
                    bg-gradient-to-r
                    from-red-500
                    to-orange-500 
                    relative
                    overflow-hidden
                    p-1
                    my-5
                    m-1
                  "
              >
                <div
                  className="
                      flex 
                      flex-col 
                      h-full 
                      justify-end 
                      bg-cover
                      bg-center
                    "
                >
                  <Image
                    alt="Dashboard BI"
                    src={"/images/Python_BI_Streamlit.png"}
                    width={400}
                    height={200}
                    className="w-full h-full"
                  />
                  <div
                    className=" 
                        p-4
                        sm:text-xl
                        text-sm
                        hover:flex 
                        hover:flex-col 
                        hover:ease-in-out 
                        duration-500
                        bg-black/80
                        absolute
                        right-0
                        -bottom-44
                        group-hover:bottom-0
                        w-full
                      "
                  >
                    <Font>
                      Kaggle challenge: BI no setor de games. Dasboards
                      dinâmicos utilizando: pyplot, pandas e a biblioteca
                      gráfica streamlit
                    </Font>
                    <div className="gap-3 flex justify-center p-1 ">
                      <Link
                        href={
                          "https://github.com/Sevengusta/Python_dash_game_sales/tree/main"
                        }
                        target="_blank"
                      >
                        <Button>Repositório</Button>
                      </Link>
                      <Link
                        href={
                          "https://sevengusta-dash-game-sales.streamlit.app/"
                        }
                      >
                        <Button>Projeto</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
