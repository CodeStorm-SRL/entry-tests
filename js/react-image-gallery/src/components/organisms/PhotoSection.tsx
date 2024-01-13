import { FC } from "react";
import Image from "../molecules/Image";
import { useQuery } from "@tanstack/react-query";
import { ImageObjectInterface, getImages } from "../../services/apiImages";

const PhotoSection: FC = () => {
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  if (isLoading) return null;
  if (error) return null;

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {images.map((image: ImageObjectInterface) => (
        <Image image={image} />
      ))}
    </section>
  );
};

export default PhotoSection;
