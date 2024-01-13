import { FC } from "react";
import Header from "../Template/Header";

const AppLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full px-5 pb-3 pt-5 bg-bg-color">
      <Header />
    </div>
  );
};
export default AppLayout;
