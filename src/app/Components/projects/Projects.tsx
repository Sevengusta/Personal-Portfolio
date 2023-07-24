"use client"
import Certificates from "./Certificates";
import Show from "./Show";

export const Projects = () => {
  return (
      <div 
        className="
          container
          bg-gray-600
          flex 
          flex-col
          py-2
        "
      >
        <Show />
        <Certificates />
      </div>
  );
};
