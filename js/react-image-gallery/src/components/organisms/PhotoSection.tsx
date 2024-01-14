import { FC } from "react";
import AsyncImage from "../molecules/AsyncImage";
import { ImageObjectInterface } from "../../services/apiImages";
import { useAppContext } from "../../context/useAppContext";
import Section from "../atoms/Section";

const classNames = "grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6";

const PhotoSection: FC = () => {
  const { error, images, isLoading } = useAppContext();

  if (isLoading) return null;
  if (error) return null;

  return (
    <Section className={classNames}>
      {images.map((image: ImageObjectInterface, index) => (
        <AsyncImage image={image} key={image.id} index={index} />
      ))}
    </Section>
  );
};

export default PhotoSection;
