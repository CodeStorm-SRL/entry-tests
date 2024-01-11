import { ComponentProps, FC, PropsWithChildren } from "react";

// Determino il tipo delle varianti di stile del testo
type TextVariant = "primary" | "secondary";

// Tipi di tag ammessi: potranno essere espansi se serve
type TextTags = "h1" | "h2" | "p";

// As indica il tag, styledAs indica come vogliamo stilizzare il componente:
// es: possiamo creare un tag "p" (as === "p") stilizzato come "h1" (styledAs === "h1")
type TextProps = PropsWithChildren<{
  variant?: TextVariant;
  as?: TextTags;
  styledAs?: TextTags;
}> &
  ComponentProps<TextTags>;

const Text: FC<TextProps> = ({
  as = "p",
  styledAs = as,
  variant = "primary",
  children,
  ...attributes
}: TextProps) => {
  // Creo un componente che ritornerà il tag as così da creare un tag
  // dinamico (as === "p" => <p></p>)
  const El = as;

  // Stile in base alla variante e al tag
  const styles: Record<TextTags | TextVariant, string> = {
    h1: "text-xl",
    h2: "text-lg",
    p: "text-md",
    primary: "text-red-500",
    secondary: "text-md text-orange-500",
  };

  const classNames = `${styles[variant]} ${styles[styledAs]}`;

  return (
    <El {...attributes} className={classNames}>
      {children}
    </El>
  );
};

export default Text;
