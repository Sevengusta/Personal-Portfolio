"use client";
import Image from "next/image";
import { Photo } from "../data/photo";

type Props = {
  photo: Photo;
  abrir: () => void;
};

export const PhotoItem = ({ photo, abrir }: Props) => {
  return (
    <div onClick={abrir} className="hover:opacity-80 cursor-grab ">
      <img
        onClick={abrir}
        src={`${photo.url}`}
        alt=""
        className=" w-full"
      />
    </div>
  );
};
