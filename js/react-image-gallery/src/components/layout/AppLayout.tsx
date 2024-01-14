import { FC } from "react";
import Header from "../Template/Header";
import { Outlet } from "react-router";
import { useAppContext } from "../../context/useAppContext";

const AppLayout: FC = () => {
  const { darkMode } = useAppContext();

  const classNames = `flex flex-col min-h-[100vh] w-full px-5 md:px-10 pb-3 py-2 bg-bg-color gap-4 select-none ${
    darkMode ? "darkMode" : ""
  }`;

  return (
    <div className={classNames}>
      <Header />
      <Outlet />
    </div>
  );
};
export default AppLayout;
