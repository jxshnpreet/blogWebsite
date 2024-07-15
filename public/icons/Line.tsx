import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={71}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M1.5.5v70h-1V.5z" />
  </svg>
)
export default SvgComponent
