type Font = {
  children: string ;
  currentYear?: string;
};

export const Font = ({ children, currentYear }: Font) => {
  return (
    <span
      className="
          font-extrabold  
          bg-clip-text 
          text-transparent
          bg-gradient-to-t
          to-orange-500 
          from-red-500 
          inline
      "
    >
      {children} {currentYear && ` ${currentYear}`}
    </span>
  );
};
