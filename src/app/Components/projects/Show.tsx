import React from "react";
import { Font } from "../comuns/Font";
import Button from "../comuns/Button";
import Image from "next/image";

const Show = () => {
  return (
    <div className="w-[500px] max-w-full h-full">
      <h3
        className="
          text-xl 
          md:text-2xl 
          text-center
          "
      >
        <Font>Projetos</Font>
      </h3>
      <div className="w-[500px] max-w-full h-full">
        <div
          className="
            mx-auto 
            flex w-[500px] max-w-full 
            items-center 
            justify-center
            group
            cursor-pointer
          "
        >
          <div
            className="
              h-60 
              w-[500px] max-w-full
              rounded-md
              bg-gradient-to-r
              from-red-500
              to-orange-500 
              relative
              overflow-hidden
              p-1
            "
          >
            <div
              className="
                flex 
                flex-col 
                h-full 
                w-[fit] 
                justify-end 
                bg-gray-800 
                bg-[url('/images/Calculadora.png')]
                bg-cover
                overflow-hidden
                px-2

              "
            >
              <div 
                className=" 
                  text-center 
                  hover:flex 
                  hover:flex-col 
                  hover:-translate-y-10 
                  hover:ease-in-out 
                  duration-300
                  
                  absolute
                  -bottom-32
                  group-hover:bottom-0

                "
              >

                <Font> Calculadora contábil criada com arquitetura MVC através do Laravel</Font>
                <div className="gap-3 flex">
                  <Button>Repositório</Button>
                  <Button>Vídeo</Button>
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
