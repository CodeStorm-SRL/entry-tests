import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";

type DescriptionFieldsProps = PropsWithChildren<{
  field: string;
}>;

const DescriptionFields: FC<DescriptionFieldsProps> = ({
  field,
  children,
}: DescriptionFieldsProps) => {
  if (!children) return null;

  return (
    <Text>
      <b>{field}</b>: <i>{children}</i>
    </Text>
  );
};

export default DescriptionFields;
