import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M0 15.813c0-8.285 6.716-15 15-15 8.284 0 15 6.715 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15Z"
    />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m11.725 23.026 1.984-6.923H9.234l2.783-7.498h6.305l-2.79 4.557h5.242l-9.049 9.864Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M9.234 8.605h11.54v14.42H9.234z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
