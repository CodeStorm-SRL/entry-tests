import { FC } from "react";
import PhotoSection from "../organisms/PhotoSection";
import Section from "../atoms/Section";

const MainPage: FC = () => {
  return (
    <Section as="main">
      <PhotoSection />
    </Section>
  );
};

export default MainPage;
