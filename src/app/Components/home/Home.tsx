import { Video } from "./Video";
import LeftArea from "./LeftArea";
export const Home = () => {
  return (
      <div 
        className="
          container
          bg-gray-600
          flex 
          flex-col
          xl:grid
          xl:grid-cols-2
          xl:gap-5
        "
      >
        <LeftArea />
        <Video />
      </div>
  );
};
