import { ComponentProps, FC, PropsWithChildren } from "react";

// Stesso principio di Text e Button:
// as determina se il componente sarà un main o una section
// e fornisco tutte le proprietà di main e section all'istanza
type SectionType = "main" | "section";

type SectionProps = PropsWithChildren<{
  as?: SectionType;
}> &
  ComponentProps<SectionType>;

const Section: FC<SectionProps> = ({
  as = "section",
  children,
  ...attributes
}) => {
  const El = as;

  // Possibilità di aggiungere stile al componente quando istanziato
  const { className: customClassNames } = attributes;

  const classNames = `flex flex-col items-center justify-center flex-grow w-full ${
    customClassNames ? customClassNames : ""
  }`;

  return (
    <El className={classNames} {...attributes}>
      {children}
    </El>
  );
};
export default Section;
