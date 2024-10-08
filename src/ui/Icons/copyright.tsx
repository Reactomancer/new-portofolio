import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface GithubIconProps {
  size?: "sm" | "md";
}

export const CopyrightIcon: FC<GithubIconProps> = ({ size = "sm" }) => (
  <svg
    className={twMerge(
      "text-gray-light-600 dark:text-gray-dark-600",
      size === "sm" && "w-6",
      size === "md" && "w-8",
    )}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9.354C14.4626 8.7447 13.7523 8.31351 12.9638 8.11779C12.1753 7.92208 11.3458 7.97112 10.5859 8.2584C9.8259 8.54568 9.17143 9.05757 8.70954 9.72596C8.24765 10.3943 8.00024 11.1875 8.00024 12C8.00024 12.8125 8.24765 13.6057 8.70954 14.274C9.17143 14.9424 9.8259 15.4543 10.5859 15.7416C11.3458 16.0289 12.1753 16.0779 12.9638 15.8822C13.7523 15.6865 14.4626 15.2553 15 14.646"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
