import { FC } from "react";
import Text from "../atoms/Text";

const NotFoundPage: FC = () => {
  return (
    <div className="max-w-[1024px] m-auto text-center space-y-2">
      <Text as="h1" styledAs="h2">
        404
      </Text>
      <Text as="h2" styledAs="h4">
        Page not found 😢
      </Text>
      ;
    </div>
  );
};
export default NotFoundPage;
