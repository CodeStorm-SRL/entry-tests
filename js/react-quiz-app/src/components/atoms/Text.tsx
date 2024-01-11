import { ComponentProps, FC, PropsWithChildren } from "react";

// Tipi di tag ammessi: potranno essere espansi se serve
type TextTags = "h1" | "h2" | "h4" | "p";

// As indica il tag, styledAs indica come vogliamo stilizzare il componente:
// es: possiamo creare un tag "p" (as === "p") stilizzato come "h1" (styledAs === "h1")
type TextProps = PropsWithChildren<{
  as?: TextTags;
  styledAs?: TextTags;
  isDark?: boolean;
}> &
  ComponentProps<TextTags>;

const Text: FC<TextProps> = ({
  as = "p",
  styledAs = as,
  isDark,
  children,
  ...attributes
}: TextProps) => {
  // Creo un componente che ritornerà il tag as così da creare un tag
  // dinamico (as === "p" => <p></p>)
  const El = as;

  // Stile in base alla variante e al tag
  const styles: Record<TextTags, string> = {
    h1: "text-h1",
    h2: "text-h2",
    h4: "text-h4",
    p: "text-md",
  };

  const { className: customClassName } = attributes;

  const classNames = `${styles[styledAs]} ${
    isDark ? "text-dark" : "text-light"
  } ${customClassName ? customClassName : ""}`;

  return (
    <El {...attributes} className={classNames}>
      {children}
    </El>
  );
};

export default Text;
