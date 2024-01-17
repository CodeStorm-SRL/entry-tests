import { imagesData } from "../imagesData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Image from "./Image";

export default function Slider() {
  // state per tenere traccia dell'index per decidere quale immagine mostrare
  const [idx, setIdx] = useState(0);

  // funzione per passare all'immagine successiva
  const nextImage = () => {
    setIdx(idx === imagesData.length - 1 ? 0 : idx + 1);
  };

  // funzione per tornare indietro all'immagine precedente
  const prevImage = () => {
    setIdx(idx === 0 ? imagesData.length - 1 : idx - 1);
  };

  return (
    <div className="slide-container">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevImage} />
      {imagesData.map((data, index) => {
        return <Image idx={idx} index={index} key={index} data={data} />;
      })}
      <IoIosArrowForward className="arrow arrow-right" onClick={nextImage} />
    </div>
  );
}
