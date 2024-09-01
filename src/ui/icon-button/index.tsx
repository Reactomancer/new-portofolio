import { ButtonHTMLAttributes, FC, ReactNode } from "react";
interface Button {
  children: ReactNode;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Button;

export const IconButton: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="rounded-lg p-[6px] hover:bg-gray-light-100 active:bg-gray-light-200 dark:hover:bg-gray-dark-100 dark:active:bg-gray-dark-200"
  >
    {children}
  </button>
);
