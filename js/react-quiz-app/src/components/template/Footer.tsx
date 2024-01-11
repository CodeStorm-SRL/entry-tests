import { useAppSelector } from "../../hooks/reduxHooks";
import Text from "../atoms/Text";

const Footer = () => {
  // Record personale dell'utente salvato nel localStorage
  const { userRecord } = useAppSelector((state) => state.user);
  return (
    <footer className="h-24">
      <Text>Personal Record: {userRecord}</Text>
    </footer>
  );
};

export default Footer;
