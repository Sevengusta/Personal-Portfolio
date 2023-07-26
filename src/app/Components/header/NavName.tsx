"use client";
import React from "react";

interface NavProps {
  children: React.ReactNode;
  refs: string
}

const NavName: React.FC<NavProps> = ({ children, refs }) => {
  return (
    <div className="group">
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
              duration-300 
              group-hover:w-full
            "
        ></div>
      </li>
    </div>
  );
};

export default NavName;
