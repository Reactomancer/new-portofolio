import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: string;
  className?: string;
}

export const H2: FC<Props> = ({ children, className }) => (
  <h2 className={twMerge("text-heading-2 lg:text-heading-2-lg", className)}>
    {children}
  </h2>
);
