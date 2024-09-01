import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface GithubIconProps {
  size?: "sm" | "md";
}

export const BurgerMenuIcon: FC<GithubIconProps> = ({ size = "sm" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge(
      "text-gray-light-600 dark:text-gray-dark-600",
      size === "sm" && "w-6",
      size === "md" && "w-8",
    )}
  >
    <path
      d="M4 12H20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 6H20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 18H20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
