import { FC, useEffect } from "react";
import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Section from "../atoms/Section";
import { useImage } from "../../hooks/useImage";
import { Image } from "../atoms/Image";
import { ImgNavigationButton } from "../molecules/ImgNavigationButton";
import PhotoDetails from "../organisms/PhotoDetails";

const PhotoPage: FC = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const numericId = id ? +id : null;
  const {
    error,
    indexImg,
    images,
    isLoading,
    nextImg,
    prevImg,
    isOpen,
    handleOpen,
  } = useImage(numericId as number);

  useEffect(
    function () {
      params.set("id", String(indexImg));
      setParams(params);
    },
    [indexImg, params, setParams]
  );

  if (!images || !id) return <Navigate to="/" />;
  if (isLoading) return "loading";
  if (error) return "error";

  const image = images[indexImg];

  return (
    <Section as="main" className="relative flex items-center justify-center">
      {isOpen ? (
        <Image
          src={image?.urls.regular}
          className="max-h-[400px] sm:max-h-[600px] 2xl:max-h-[800px]"
          onClick={handleOpen}
        />
      ) : (
        <PhotoDetails
          description={image.description}
          user={image.user}
          createdAt={image.created_at}
        />
      )}

      <ImgNavigationButton direction="right" onClick={nextImg} />
      <ImgNavigationButton direction="left" onClick={prevImg} />
    </Section>
  );
};

export default PhotoPage;
