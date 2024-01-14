import { FC } from "react";
import {
  DetailsBodyProps,
  DetailsDescriptionProps,
  DetailsTitleProps,
} from "./PhotoDetailsTypes";
import Text from "../../atoms/Text";
import { FaInstagram } from "react-icons/fa";
import DescriptionFields from "../../molecules/DescriptionFields";

export const Body: FC<DetailsBodyProps> = ({ onClose, children }) => {
  return (
    <div className="w-[95%] sm:w-[80%] space-y-3">
      <Text
        onClick={onClose}
        className="inline-block p-3 cursor-pointer hover:translate-x-2 hover:text-primary"
      >
        &larr; Back
      </Text>
      {children}
    </div>
  );
};

export const Title: FC<DetailsTitleProps> = ({
  authorName,
  userName,
}: DetailsTitleProps) => {
  return (
    <Text as="h1" styledAs="h4">
      <b>Author</b>: <b className="text-primary">{authorName}</b>{" "}
      <br className="md:hidden" />
      <FaInstagram className="inline mb-1 text-2xl ms-0 md:ms-5 text-dark" />/
      <span className="text-primary">{userName}</span>
    </Text>
  );
};

export const Description: FC<DetailsDescriptionProps> = ({
  data,
  location,
  bio,
  children,
}: DetailsDescriptionProps) => {
  return (
    <>
      <DescriptionFields field="Description">{children}</DescriptionFields>
      <DescriptionFields field="Data">{data}</DescriptionFields>
      <DescriptionFields field="Location">{location}</DescriptionFields>
      <DescriptionFields field="Bio">{bio}</DescriptionFields>
    </>
  );
};
