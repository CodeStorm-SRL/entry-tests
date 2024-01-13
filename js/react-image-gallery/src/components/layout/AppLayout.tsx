import { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full px-5 pb-3 pt-5">
      {children}
    </div>
  );
};
export default AppLayout;
