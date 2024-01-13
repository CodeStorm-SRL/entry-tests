import { FC } from "react";
import PhotoSection from "../organisms/PhotoSection";

const MainPage: FC = () => {
  return (
    <main className="flex-grow p-6 mx-auto w-full max-w-[1024px] bg-white rounded-3xl">
      <PhotoSection />
    </main>
  );
};

export default MainPage;
