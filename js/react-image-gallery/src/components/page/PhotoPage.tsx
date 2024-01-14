import { FC, useEffect } from "react";
import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Section from "../atoms/Section";
import { useImageNavigation } from "../../hooks/useImageNavigation";

const PhotoPage: FC = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const numericId = id !== null ? +id : null;
  const { error, indexImg, images, isLoading, nextImg, prevImg } =
    useImageNavigation(numericId as number);

  const image = images[indexImg];

  useEffect(
    function () {
      params.set("id", String(indexImg));
      setParams(params);
    },
    [indexImg, params, setParams]
  );

  if (!images) return <Navigate to="/" />;
  if (isLoading) return "loading";
  if (error) return "error";

  return (
    <Section as="main" className="flex justify-center">
      <img src={image?.urls.regular} className="max-h-[800px]" />
    </Section>
  );
};
export default PhotoPage;
