import { FC } from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

const AppLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full px-5 pb-3 pt-5 ">
      <Text>Ciao</Text>
      <div>
        <Button>Ciao</Button>
      </div>
    </div>
  );
};
export default AppLayout;
