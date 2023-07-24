import { Font } from "../comuns/Font";
import NavName from "./NavName";

export const Header = () => {
  return (
    <>
      <div className="container bg-gray-800 h-[70px]">
        <div className="text-2xl">
          <Font>Portifólio</Font>
        </div>
        <div className="w-2/3">
          <nav className=" hidden md:flex">
            <ul className="nav flex-1 text-2xl ">
              <NavName>
                <Font>Início</Font>
              </NavName>
              <NavName>
                <Font>Sobre mim</Font>
              </NavName>
              <NavName>
                <Font>Projetos</Font>
              </NavName>
              <NavName>
                <Font>Contatos</Font>
              </NavName>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
