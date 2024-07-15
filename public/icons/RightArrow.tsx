import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={5}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fill="#141414"
      d="M4.82 4.57c.053.053.08.112.08.18a.25.25 0 0 1-.08.18L1.18 8.57a.246.246 0 0 1-.36 0l-.391-.39a.246.246 0 0 1 0-.36l3.07-3.07L.43 1.68a.246.246 0 0 1 0-.36l.39-.391a.248.248 0 0 1 .36 0L4.82 4.57Z"
    />
  </svg>
)
export default SvgComponent
