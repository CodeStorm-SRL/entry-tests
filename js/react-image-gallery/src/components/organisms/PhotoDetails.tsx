import { FC } from "react";
import { Artist } from "../../services/apiImages";
import Text from "../atoms/Text";
import { FaInstagram } from "react-icons/fa";

type PhotoDetailsProps = {
  user: Artist;
  description: string;
  createdAt: string;
};

const PhotoDetails: FC<PhotoDetailsProps> = ({
  user,
  description,
  createdAt,
}: PhotoDetailsProps) => {
  return (
    <div>
      <Text>
        Author: <b>{user.name}</b>,{" "}
        <FaInstagram className="inline mb-1 text-lg text-dark" />:{" "}
        {user.instagram_username}
      </Text>
      <Text>Description: {description}</Text>
      <Text>Data: {createdAt}</Text>
    </div>
  );
};

export default PhotoDetails;
