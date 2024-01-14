import { useState } from "react";
import { useAppContext } from "../context/useAppContext";

export const useImageNavigation = (id: number) => {
  const { images, isLoading, error } = useAppContext();
  const [indexImg, setIndexImg] = useState<number>(id);

  function nextImg(): void {
    if (indexImg + 1 > images?.length - 1) {
      setIndexImg(0);
      return;
    }

    setIndexImg((n) => n + 1);
  }
  function prevImg(): void {
    if (indexImg < 1) {
      setIndexImg(images.length - 1);
      return;
    }

    setIndexImg((n) => n - 1);
  }
  return { isLoading, error, indexImg, images, nextImg, prevImg };
};
