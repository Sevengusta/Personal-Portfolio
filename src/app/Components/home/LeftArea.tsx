import React from "react";
import { Font } from "../comuns/Font";
import Button from "../comuns/Button";

const LeftArea = () => {
  return (
    <div>
      <h3 className="text-2xl py-2 md:text-3xl md:py-4 ">
        <Font>Contador e Programador</Font>
      </h3>
      <h1 className=" text-3xl  md:text-5xl md:py-4">Seja bem vindo</h1>
      <p className=" text-sm  md:text-xl xl:text-xl  py-2">
        Tenho 26 anos de idade e estou cursando <Font> Computação </Font>
        pela Univesidade Federal Fluminense. Atualmente, utilizo o
        <Font> Laravel </Font>para realizar projetos front e backend, com
        enfoque na área de
        <Font> Finanças e Validação de dados. </Font>
      </p>
      <Button>
        Download CV
      </Button>
    </div>
  );
};

export default LeftArea;
