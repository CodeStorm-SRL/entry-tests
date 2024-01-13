import { FC } from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../../context/useAppContext";
import { useSearchParams } from "react-router-dom";

const PhotoPage: FC = () => {
  const { images, isLoading, error } = useAppContext();
  const [params] = useSearchParams();
  const id = params.get("id");

  //   return null;

  if (!images) return <Navigate to="/" />;
  if (isLoading) return "loading";
  if (error) return "error";

  const image = images.find((image) => image.id === id);

  return <img src={image?.urls.regular} />;
};
export default PhotoPage;
