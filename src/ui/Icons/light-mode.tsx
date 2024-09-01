import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface GithubIconProps {
  size?: "sm" | "md";
}

export const LightModeIcon: FC<GithubIconProps> = ({ size = "sm" }) => (
  <svg
    className={twMerge(
      "text-gray-light-600 dark:text-gray-dark-600",
      size === "sm" && "w-6",
      size === "md" && "w-8",
    )}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 16C14.7091 16 16.5 14.2091 16.5 12C16.5 9.79086 14.7091 8 12.5 8C10.2909 8 8.5 9.79086 8.5 12C8.5 14.2091 10.2909 16 12.5 16Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 2V4"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 20V22"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.42969 4.92969L6.83969 6.33969"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.1602 17.6602L19.5702 19.0702"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.5 12H4.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.5 12H22.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.83969 17.6602L5.42969 19.0702"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5702 4.92969L18.1602 6.33969"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
