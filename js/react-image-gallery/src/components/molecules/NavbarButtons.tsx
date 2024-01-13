import { useAppContext } from "../../context/useAppContext";
import Button from "../atoms/Button";
import { MdDarkMode } from "react-icons/md";

const NavbarButtons = () => {
  const { dispatch } = useAppContext();

  function handleToggleDarkMode() {
    dispatch({ type: "darkMode" });
  }
  return (
    <ul className="flex gap-3">
      <li>
        <Button onClick={handleToggleDarkMode}>
          <MdDarkMode />
        </Button>
      </li>
      <li>
        <Button>Next</Button>
      </li>
    </ul>
  );
};

export default NavbarButtons;
