import { Font } from "../comuns/Font";
export const Video = () => {
  return (
    <>
      <div className="w-full h-full">
        <h3
          className="
            text-2xl
            py-2 
            md:text-3xl
            md:py-4
          "
        >
          <Font> Conheça meus projetos</Font>
        </h3>

        <div
          className="
            mx-auto 
            flex w-full 
            items-center 
            justify-center
          "
        >
          <div
            className="
              h-60 
              w-full
              rounded-md
              bg-gradient-to-r
              from-red-500
              to-orange-500 p-1
            "
          >
            <div 
            className="
                flex 
                flex-col 
                h-full 
                w-full 
                items-center 
                justify-center 
                bg-gray-800 
                back
              "
            >
              <h1 className="text-2xl font-black text-white">xxx</h1>
              <h1>assistir vídeo</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
