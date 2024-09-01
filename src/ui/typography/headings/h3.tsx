import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: string;
  className?: string;
}

export const H3: FC<Props> = ({ children, className }) => (
  <h3 className={twMerge("text-heading-3 lg:text-heading-3-lg", className)}>
    {children}
  </h3>
);
