import { FC } from "react";
import { ImageObjectInterface } from "../../services/apiImages";
import { useNavigate } from "react-router";

type ImageProps = {
  image: ImageObjectInterface;
};

const classNames =
  "w-full hover:scale-105 cursor-pointer overflow-hidden h-[200px]";

const Image: FC<ImageProps> = ({ image }: ImageProps) => {
  const navigate = useNavigate();

  function openSingleImage(): void {
    navigate(`/pic?id=${image.id}`);
  }

  return (
    <div className={classNames} onClick={openSingleImage}>
      <img src={image?.urls.regular} alt="#" className="max-h-[100%]]" />
    </div>
  );
};

export default Image;
