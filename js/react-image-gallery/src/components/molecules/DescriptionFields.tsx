import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";

type DescriptionFieldsProps = PropsWithChildren<{
  field: string;
}>;

const DescriptionFields: FC<DescriptionFieldsProps> = ({
  field,
  children,
}: DescriptionFieldsProps) => {
  return (
    <>
      {!!children && (
        <Text>
          <b>{field}</b>: <i>{children}</i>
        </Text>
      )}
    </>
  );
};

export default DescriptionFields;
