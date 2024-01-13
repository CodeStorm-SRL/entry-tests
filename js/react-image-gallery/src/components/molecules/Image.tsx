import { FC } from "react";
import { ImageObjectInterface } from "../../services/apiImages";

type ImageProps = {
  image: ImageObjectInterface;
};

const Image: FC<ImageProps> = ({ image }: ImageProps) => {
  return (
    <div className="w-full hover:scale-105 cursor-pointer overflow-hidden h-[200px]">
      <img src={image?.urls.regular} alt="#" className="max-h-[100%]]" />
    </div>
  );
};

export default Image;
