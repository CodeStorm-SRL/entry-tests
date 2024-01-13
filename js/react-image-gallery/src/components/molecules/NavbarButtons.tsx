import { useAppContext } from "../../context/useAppContext";
import Button from "../atoms/Button";
import { FaSun } from "react-icons/fa";

import { MdDarkMode } from "react-icons/md";

const NavbarButtons = () => {
  const { dispatch, darkMode } = useAppContext();

  function handleToggleDarkMode() {
    dispatch({ type: "darkMode" });
  }
  return (
    <ul className="flex gap-3">
      <li>
        <Button onClick={handleToggleDarkMode}>
          {darkMode ? <FaSun /> : <MdDarkMode />}
        </Button>
      </li>
      <li>
        <Button>Next</Button>
      </li>
    </ul>
  );
};

export default NavbarButtons;
