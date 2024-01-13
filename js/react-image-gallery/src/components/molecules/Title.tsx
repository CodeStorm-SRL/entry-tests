import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";
import { useNavigate } from "react-router";

const Title: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Text as="h1" color="dark" onClick={() => navigate("/")}>
      {children}
    </Text>
  );
};

export default Title;
