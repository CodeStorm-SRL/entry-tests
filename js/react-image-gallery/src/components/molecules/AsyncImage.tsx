import { FC } from "react";
import { ImageObjectInterface } from "../../services/apiImages";
import { useNavigate } from "react-router";
import { InView } from "react-intersection-observer";
import { Image } from "../atoms/Image";

type AsyncImageProps = {
  image: ImageObjectInterface;
};

const classNames = "w-full hover:scale-105 cursor-pointer";

const AsyncImage: FC<AsyncImageProps> = ({ image }: AsyncImageProps) => {
  const navigate = useNavigate();

  function openSingleImage(): void {
    navigate(`/pic?id=${image.id}`);
  }

  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div className={classNames} onClick={openSingleImage} ref={ref}>
          <Image
            src={image?.urls.regular}
            alt="#"
            className="max-h-[100%]] aspect-square"
            inView={inView}
            smallSrc={image?.urls.small}
          />
        </div>
      )}
    </InView>
  );
};

export default AsyncImage;
