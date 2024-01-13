import { FC } from "react";
import Image from "../molecules/Image";
import { ImageObjectInterface } from "../../services/apiImages";
import { useAppContext } from "../../context/useAppContext";

const PhotoSection: FC = () => {
  const { error, images, isLoading } = useAppContext();

  if (isLoading) return null;
  if (error) return null;

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {images.map((image: ImageObjectInterface) => (
        <Image image={image} key={image.id} />
      ))}
    </section>
  );
};

export default PhotoSection;
