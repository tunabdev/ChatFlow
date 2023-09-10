import React from "react";

type IconProps = {
  height?: number;
  width?: number;
  fill?: number;
  stroke?: number;
  strokeWidth?: number;
  className?: string;
};

function Icon({ height = 24, width = 24 }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 512 512"
    >
      <path
        d="M2309 3555l-264-153-3-41c-2-22-5-41-7-41s-20 8-39 17l-35 16-263-151-263-151-3-310-2-309 36-23 36-22-36-20-36-21v-621l268-154 267-154 28 17c41 23 47 20 47-22v-38l254-147c140-81 261-150 269-153 9-3 126 59 281 148l266 153v38c0 42 0 42 41 21l31-16 166 96c92 53 212 122 267 154l100 58 3 307 2 308-35 20c-19 12-35 24-35 28s16 15 35 24l35 17v609l-27 19c-16 10-135 81-267 157l-239 137-34-16c-18-9-36-16-38-16-3 0-5 17-5 39 0 38-1 39-87 89-49 27-169 97-269 154l-181 105-264-152z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Icon;
