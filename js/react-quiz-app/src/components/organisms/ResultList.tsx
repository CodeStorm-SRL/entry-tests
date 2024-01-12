import { FC, PropsWithChildren } from "react";

const ResultList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className="list-none space-y-6">{children}</ul>;
};
export default ResultList;
