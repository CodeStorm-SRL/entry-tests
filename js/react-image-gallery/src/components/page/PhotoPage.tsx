import { FC, useEffect } from "react";
import Section from "../atoms/Section";
import PhotoDetails from "../organisms/PhotoDetails/PhotoDetails";
import Loader from "../molecules/Loader";
import ErrorComponent from "../molecules/ErrorComponent";
import ImgNavigation from "../organisms/ImgNavigation";

import { useImage } from "../../hooks/useImage";
import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";

// Con useImage setto l'index come
// searchParam
const PhotoPage: FC = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const numericId = id ? +id : null;
  const {
    error, // error di TanStack Query
    indexImg, // index dell'immagine
    images, // array di immagini
    isLoading, // isLoading di TanStack Query
    nextImg, // fn per passare alla prossima img
    prevImg, // precedente img
    isOpen: isDetailsOpen, // i dettagli sono aperti
    handleOpen, // apre/chiude i dettagli
  } = useImage(numericId as number);

  useEffect(
    function () {
      params.set("id", String(indexImg));
      setParams(params);
    },
    [indexImg, params, setParams]
  );

  if (!images || !id) return <Navigate to="/" />;
  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent />;

  // Immagine attuale
  const image = images[indexImg];

  return (
    <Section as="main" className="relative flex items-center justify-center">
      {isDetailsOpen ? (
        // immagine
        <ImgNavigation
          src={image?.urls.regular}
          handleOpen={handleOpen}
          nextImg={nextImg}
          prevImg={prevImg}
        />
      ) : (
        // dettagli
        <PhotoDetails
          description={image.description}
          user={image.user}
          createdAt={image.created_at}
          onClose={handleOpen}
        />
      )}
    </Section>
  );
};

export default PhotoPage;
