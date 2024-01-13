import Button from "../atoms/Button";
import { MdDarkMode } from "react-icons/md";

const NavbarButtons = () => {
  return (
    <ul className="flex gap-3">
      <li>
        <Button>
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
