import React from "react";
import { IconProps } from "@/lib/utils";

function Icon({ height = 24, width = 24 }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="css-1fy6kej"
      color="gray.100"
      viewBox="0 0 22 22"
    >
      <path
        fillRule="evenodd"
        d="M3 11.23C3.813 13.91 7.133 16 11 16s7.187-2.09 8-4.77v-.46C18.187 8.09 14.867 6 11 6s-7.187 2.09-8 4.77v.46zm18-.73C20 6.5 15.5 4 11 4S2 6.5 1 10.5v1c1 4 5.5 6.5 10 6.5s9-2.5 10-6.5v-1z"
        clipRule="evenodd"
      ></path>
      <path d="M14 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
}

export default Icon;
