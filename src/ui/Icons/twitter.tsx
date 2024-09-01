import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface GithubIconProps {
  size?: "sm" | "md";
}

export const TwitterIcon: FC<GithubIconProps> = ({ size = "sm" }) => (
  <svg
    width="24"
    className={twMerge(
      "text-gray-light-600 dark:text-gray-dark-600",
      size === "sm" && "w-6",
      size === "md" && "w-8",
    )}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
