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
        d="M15.547 8.303A5.148 5.148 0 0012.11 7C9.287 7 7 9.239 7 12s2.287 5 5.109 5c3.47 0 4.751-2.57 4.891-4.583h-4.159"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z"
      ></path>
    </svg>
  );
}

export default Icon;
