import { FC } from "react";
import Text from "../atoms/Text";

const Navbar: FC = () => {
  return (
    <nav className="px-3 py-5 text-center h-14">
      <Text as="h1">Questo è l'header</Text>
    </nav>
  );
};
export default Navbar;
