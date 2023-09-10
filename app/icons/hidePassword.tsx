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
        d="M14.5 2l-1.116 2.232A12.442 12.442 0 0011 4C6.5 4 2 6.5 1 10.5v1c.685 2.74 3.012 4.776 5.857 5.787L5.5 20h2.25l9-18H14.5zM11 6c.494 0 .979.034 1.45.1l-.97 1.938a3 3 0 00-2.561 5.123l-1.163 2.327C5.385 14.709 3.572 13.116 3 11.231v-.462C3.813 8.09 7.133 6 11 6z"
        clipRule="evenodd"
      ></path>
      <path d="M17.169 5.662l-.898 1.796c1.35.85 2.335 2.012 2.729 3.311v.462c-.74 2.439-3.559 4.39-6.975 4.72L11 18c4.5 0 9-2.5 10-6.5v-1c-.513-2.053-1.948-3.71-3.831-4.838z"></path>
    </svg>
  );
}

export default Icon;
