import React from "react";

type Button = {
  children: string;
};

const Button = ({ children }: Button) => {
  return (
    <button 
        className="
            p-2 
            my-2 
            rounded 
            bg-gradient-to-r 
            from-red-500 
            to-orange-500 
            hover:shadow-red-500/70 
            ease-out 
            duration-700 
            shadow-lg  
        "
    >
      {children}
    </button>
  );
};

export default Button;
