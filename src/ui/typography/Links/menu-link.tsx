import { FC } from "react";
interface Props {
  children: string;
}

export const MenuLink: FC<Props> = ({ children }) => (
  <p className="cursor-pointer text-Body-2 font-semibold text-gray-light-600 hover:text-gray-light-900 dark:text-gray-dark-600 hover:dark:text-gray-dark-900">
    {children}
  </p>
);
