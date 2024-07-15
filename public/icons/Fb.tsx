import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      stroke="#E0DEDE"
      d="M1 25C1 11.469 11.969.5 25.5.5S50 11.469 50 25 39.031 49.5 25.5 49.5 1 38.531 1 25Z"
    />
    <path
      fill="gray"
      d="M29.5 17.107v2.357h-1.405c-.512 0-.857.108-1.037.323-.178.213-.267.535-.267.964v1.687h2.62l-.35 2.642h-2.27v6.778h-2.739V25.08h-2.28v-2.642h2.28V20.49c0-1.107.31-1.965.93-2.575.621-.61 1.447-.916 2.479-.916.877 0 1.557.036 2.04.107Z"
    />
  </svg>
)
export default SvgComponent
