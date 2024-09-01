import { FC } from "react";
interface Props {
  children: string;
}

export const NormalLink: FC<Props> = ({ children }) => (
  <p className="text-Body-2 cursor-pointer text-gray-light-600 underline hover:text-gray-light-900 dark:text-gray-dark-600 hover:dark:text-gray-dark-900">
    {children}
  </p>
);
