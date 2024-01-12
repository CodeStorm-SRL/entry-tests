import { FC } from "react";
import Spinner from "../atoms/Spinner";

export const Loader: FC = () => {
  return (
    <div className="spinnerContainer">
      <Spinner />
    </div>
  );
};
