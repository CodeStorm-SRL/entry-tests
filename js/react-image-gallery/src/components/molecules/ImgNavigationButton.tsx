import { FC } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type directions = "left" | "right";

type ImgNavigationButtonProps = {
  direction: directions;
  onClick(): void;
};
export const ImgNavigationButton: FC<ImgNavigationButtonProps> = ({
  direction,
  onClick,
}: ImgNavigationButtonProps) => {
  const styles: Record<directions, string> = {
    left: "left-4 hover:-translate-x-1",
    right: "right-4 hover:translate-x-1",
  };

  const classNames = `rounded-full absolute inset-y-50 ${styles[direction]} z-50 opacity-70 cursor-pointer hover:opacity-100 p-4`;

  return (
    <div className={classNames} onClick={onClick}>
      <div className="border rounded-full bg-bg-color">
        {direction === "left" ? (
          <MdOutlineKeyboardArrowLeft className="text-[2.5rem] text-dark" />
        ) : (
          <MdOutlineKeyboardArrowRight className="text-[2.5rem] text-dark" />
        )}
      </div>
    </div>
  );
};
