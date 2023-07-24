import React, { Children } from "react";
import { Font } from "../comuns/Font";

interface NavProps {
  children: React.ReactNode;
  graduation: string;
  date: string;
}

const Academy: React.FC<NavProps> = ({ children, graduation, date }) => {
  return (
    <div>
      <h3
        className="
          text-lg 
          sm:text-xl
          text-center 
          md:text-2xl
        "
      >
        <Font>{graduation}</Font>
          {children}
        <Font>{date}</Font>
      </h3>
    </div>
  );
};

export default Academy;
