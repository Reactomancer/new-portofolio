import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}

export const Tag: FC<Props> = ({ children, id }) => (
  <span
    id={id}
    className="rounded-xl bg-gray-light-200 px-5 py-1 text-Body-2 font-medium dark:bg-gray-dark-200"
  >
    {children}
  </span>
);
