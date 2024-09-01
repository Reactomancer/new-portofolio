import { ButtonHTMLAttributes, FC } from "react";
interface Button {
  children: string;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Button;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="rounded-xl bg-gray-light-900 px-4 py-1 text-Body-2 text-gray-light-50 hover:bg-gray-light-700 dark:bg-gray-dark-900 dark:text-gray-dark-50 dark:hover:bg-gray-dark-700"
  >
    {children}
  </button>
);
