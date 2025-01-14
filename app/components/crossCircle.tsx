import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 21 21"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.5 10.5a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 16 0zM7.5 7.5l6 6m0-6-6 6" />
    </g>
  </svg>
);
export { SvgComponent as IconCross };
