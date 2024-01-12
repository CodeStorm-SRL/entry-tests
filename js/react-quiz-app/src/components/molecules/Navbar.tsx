import { FC } from "react";
import Text from "../atoms/Text";

const Navbar: FC = () => {
  return (
    <nav className="px-3 py-5 text-center">
      <Text as="h1">The Quiz</Text>
    </nav>
  );
};
export default Navbar;
