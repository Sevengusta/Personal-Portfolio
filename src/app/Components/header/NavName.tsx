"use client";
import React from "react";

interface NavProps {
  children: React.ReactNode;
  refs: string
  onClick?: () => void
}

const NavName: React.FC<NavProps> = ({ children, refs, onClick }) => {
  return (
    <div className="group" onClick={onClick}>
      <li>
        <a href={refs}>{children}</a>
        <div
          className=" 
              w-0
              h-[2px]
              bg-gradient-to-r 
              from-red-500 
              to-orange-500 
              ease-in-out 
              duration-500 
              group-hover:w-full
            "
        ></div>
      </li>
    </div>
  );
};

export default NavName;
