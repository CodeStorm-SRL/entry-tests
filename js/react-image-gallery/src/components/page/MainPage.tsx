import { FC, PropsWithChildren } from "react";

const MainPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex-grow p-6 mx-auto w-full max-w-[1024px] bg-white rounded-3xl">
      {children}
    </main>
  );
};

export default MainPage;
