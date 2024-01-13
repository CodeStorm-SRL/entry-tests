import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text as="h1" color="dark">
      {children}
    </Text>
  );
};

export default Title;
