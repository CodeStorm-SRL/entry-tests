import { ComponentProps, FC, useState } from "react";

// Componente che riceve dal padre AsyncImage
// inView. È una props di intersection-observer-API
// che torna true se l'elemento è visibile a schermo
// false se non lo è.
// In base a inView si setta lo stato a loading o
// error.
type ImageProps = {
  inView: boolean;
} & ComponentProps<"img">;

export const Image: FC<ImageProps> = ({ inView, ...imageProps }) => {
  const [status, setStatus] = useState("loading");

  return (
    <>
      {status === "loading" && <div>loading...</div>}
      {inView && (
        <img
          {...imageProps}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("failed")}
        />
      )}
      {status === "failed" && <div>error</div>}
    </>
  );
};
