type Font = {
  children: string;
};

export const Font = ({ children }: Font) => {
  return (
    <span
      className="
          font-extrabold  
          bg-clip-text 
          text-transparent
          bg-gradient-to-r
          to-orange-500 
          from-red-500 
          inline
      "
    >
      {children}
    </span>
  );
};
