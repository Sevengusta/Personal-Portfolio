import Image from "next/image";
type Props = {
  src: string;
  onClick: () => void;
};

export const LanguageBtn = ({ src, onClick }: Props) => {
  return (
    <Image
      width={22}
      height={10}
      src={src}
      alt=""
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};
