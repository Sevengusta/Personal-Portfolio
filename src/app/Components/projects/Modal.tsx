import Image from "next/image";
import { Font } from "../comuns/Font";

type Props = {
    image:string,
    fechar: () => void
  }
  
  
  
  
  export const Modal = ({ image, fechar }: Props) => {
    return (
      <>
      <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90  z-50">
        <img  onClick={fechar} src={`${image}`} alt="Certificados" className="max-w-screen max-h-screen cursor-pointer" />
      </div>
      <div className="fixed top-5 right-5 w-10 cursor-pointer text-white text-5xl" >
        <p onClick={fechar} >
          <Font>X</Font>
        </p>
      </div>
      </>
    );
  };
  