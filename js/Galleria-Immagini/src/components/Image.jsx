import { useState } from "react";

export default function Image({ data, index, idx }) {
  // state per mostrare e nascondere l'immagine
  const [description, setDescription] = useState(false);

  // funzione per mostrare e nascondere la descrizione dell'immagine quando si clicca su di essa
  const showDescription = () => {
    setDescription(!description);
  };

  return (
    <>
      <img
        src={data.image}
        alt={`image${index}`}
        className={index === idx ? "slide" : "slide slide-hidden"}
        onClick={showDescription}
      />
      <div
        className={index === idx ? "description-container" : " slide-hidden"}
      >
        <p className="description">{description && data.description}</p>
      </div>
    </>
  );
}
