import { FC } from "react";
import Header from "../Template/Header";
import { Outlet } from "react-router";
import MainPage from "../page/MainPage";

const AppLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full px-5 md:px-10 pb-3 pt-5 bg-bg-color gap-4">
      <Header />
      <MainPage>
        <Outlet />
      </MainPage>
    </div>
  );
};
export default AppLayout;
