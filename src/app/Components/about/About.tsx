import Image from "next/image";
import { Font } from "../comuns/Font";
import Academy from "./Academy";
import Languages from "./Languages";
import Frameworks from "./Frameworks";

export const About = () => {
  return (
    <div
      className="
          container
          bg-gray-800
          flex 
          flex-col
        "
    >
      <div className="w-full">
        <h3
          className="
            text-2xl 
            py-2 
            md:text-3xl 
            md:pb-2
          "
        >
          <Font>Formação acadêmica</Font>
        </h3>
        <p className=" text-sm  md:text-xl xl:text-xl  py-2">
          Meu objetivo principal no mundo da programação é criar soluções 
          que facilitem a vida de todos os usuários da informação contábil.
        </p>
        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            justify-around
          "
        >
          <Academy graduation="Ciencias Contábeis" date="08/2019 - 12/2022">
            <Image
              alt="UFRJ"
              src={"/images/UFRJ.png"}
              width={250}
              height={150}
              className="m-auto w-1/2 sm:w-full"
            />
          </Academy>
          <Academy graduation="Computação" date="08/2023 - 12/2026">
            <Image
              className="m-auto py-[10px] w-1/4 sm:w-1/2 "
              alt="UFF"
              src={"/images/UFF.png"}
              width={130}
              height={127}
            />
          </Academy>
        </div>
        <div className="w-full">
          <h3
            className="
              text-2xl 
              py-2 
              md:text-3xl 
              md:pb-2
            "
          >
            <Font>Stacks</Font>
          </h3>
          <p 
            className="
              text-sm  
              md:text-xl 
              xl:text-xl 
              py-2
            "
          >
          Atualmente, utilizo o MySQL e o MongoDB para manipulação de dados dos meus projetos
          bem como utiizo o Insônia para realização de testes em APIs.
          </p>
        </div>
        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            justify-around
          "
        >
          <div
            className="
              flex 
              flex-col 
              justify-around
              w-full
              sm:w-1/2
              text-center
            "
          >
            <h3 className="text-xl py-2 md:text-2xl md:pb-8">
              <Font>Linguagens</Font>
              <Languages />
            </h3>
          </div>
          <div
            className="
              flex 
              flex-col 
              justify-around
              w-full
              sm:w-1/2
              text-center
            "
          >
            <h3 className="text-xl py-2 md:text-2xl md:pb-8">
              <Font>Frameworks</Font>
              <Frameworks />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
