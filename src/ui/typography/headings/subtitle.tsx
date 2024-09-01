import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: string;
  className?: string;
}

export const Subtitle: FC<Props> = ({ children, className }) => (
  <p className={twMerge("text-subtitle lg:text-subtitle-lg", className)}>
    {children}
  </p>
);
