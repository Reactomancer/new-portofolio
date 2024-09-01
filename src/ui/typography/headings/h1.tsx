import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: string;
  className?: string;
}

export const H1: FC<Props> = ({ children, className }) => (
  <h1
    className={twMerge(
      "text-heading-1 md:text-heading-1-md lg:text-heading-1-lg",
      className,
    )}
  >
    {children}
  </h1>
);
