import React from "react";

type Button = {
  children: string;
  backForm?: () => void;
  value?: string;
};

const Button = ({ children, backForm, value  }: Button) => {
  return (
    <button 
        value={value}
        onClick={backForm}
        type="submit"
        className="
            p-2 
            my-2 
            rounded 
            bg-gradient-to-t 
            to-orange-500 
          from-red-500 
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
