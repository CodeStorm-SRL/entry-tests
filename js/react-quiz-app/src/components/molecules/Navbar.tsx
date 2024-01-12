import { FC } from "react";
import Text from "../atoms/Text";

import useMainNav from "../../hooks/useMainNav";

const Navbar: FC = () => {
  const { appState, navigate } = useMainNav();
  const notInMainPage = appState !== "start";

  function backToMainPage(): void {
    if (notInMainPage) navigate("/");
  }

  return (
    <nav className="px-3 py-5 text-center">
      <Text
        as="h1"
        className={notInMainPage ? "cursor-pointer inline-block" : ""}
        onClick={backToMainPage}
      >
        The Quiz
      </Text>
    </nav>
  );
};
export default Navbar;
