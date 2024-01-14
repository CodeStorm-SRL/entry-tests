import { ComponentProps, FC, PropsWithChildren } from "react";

type SectionType = "section" | "main";

type SectionProps = PropsWithChildren<{
  as?: SectionType;
}> &
  ComponentProps<SectionType>;

const Section: FC<SectionProps> = ({
  as = "section",
  children,
  ...attributes
}: SectionProps) => {
  const El = as;

  const { className: customClassNames } = { ...attributes };

  const styles: Record<SectionType, string> = {
    main: "flex-grow p-6 mx-auto w-full max-w-[1024px] bg-bg-container rounded-3xl",
    section: "",
  };

  const classNames = `${styles[as]} ${customClassNames}`;

  return (
    <El {...attributes} className={classNames}>
      {children}
    </El>
  );
};

export default Section;
