import React from "react";
import { IconProps } from "@/lib/utils";

function Icon({ height = 24, width = 24 }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      strokeWidth="1.5"
      color="#000"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
      ></path>
    </svg>
  );
}

export default Icon;
