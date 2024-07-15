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
      d="M.5 25C.5 11.469 11.469.5 25 .5S49.5 11.469 49.5 25 38.531 49.5 25 49.5.5 38.531.5 25Z"
    />
    <path
      fill="gray"
      d="M26.617 26.616a2.2 2.2 0 0 0 .67-1.616c0-.631-.223-1.17-.67-1.616a2.199 2.199 0 0 0-1.616-.67c-.631 0-1.17.223-1.618.67-.446.446-.67.985-.67 1.616a2.2 2.2 0 0 0 .67 1.616c.447.447.987.67 1.618.67.632 0 1.17-.223 1.616-.67Zm.876-4.107c.685.684 1.027 1.515 1.027 2.491 0 .976-.342 1.807-1.027 2.491-.684.684-1.515 1.027-2.492 1.027-.976 0-1.807-.343-2.492-1.027-.685-.684-1.027-1.515-1.027-2.491 0-.976.342-1.807 1.027-2.491.685-.685 1.516-1.027 2.492-1.027.977 0 1.808.342 2.492 1.027Zm1.75-1.749c.162.16.242.353.242.58a.79.79 0 0 1-.242.58.79.79 0 0 1-.58.24.79.79 0 0 1-.58-.24.791.791 0 0 1-.243-.58c0-.227.081-.42.242-.58a.787.787 0 0 1 .58-.242c.228 0 .421.08.581.242Zm-3.56-1.389-.682.005-.684-.005a48.13 48.13 0 0 0-.943 0c-.213.003-.5.012-.86.027s-.667.044-.92.089c-.254.044-.467.099-.639.164-.298.12-.56.293-.787.518a2.31 2.31 0 0 0-.518.787c-.065.171-.12.384-.164.637-.045.254-.075.56-.09.92-.016.36-.025.648-.028.862-.003.214-.003.528 0 .943l.004.682-.004.682c-.003.415-.003.73 0 .942.003.215.012.503.029.863.015.36.044.666.089.92.044.253.099.466.164.637.119.298.291.56.518.787.227.225.49.398.787.518.172.065.385.12.638.164.254.045.56.074.92.09.36.014.647.023.86.026.216.003.53.003.944 0l.684-.005.683.005c.413.003.727.003.942 0 .215-.003.503-.012.863-.027s.667-.044.92-.089c.252-.044.465-.099.638-.164a2.33 2.33 0 0 0 1.303-1.305c.067-.171.122-.384.167-.637a7.11 7.11 0 0 0 .089-.92c.015-.36.023-.648.026-.863.003-.213.003-.527 0-.942L30.628 25l.005-.682c.003-.415.003-.73 0-.943a33.435 33.435 0 0 0-.027-.862 7.11 7.11 0 0 0-.09-.92 3.436 3.436 0 0 0-.166-.637 2.33 2.33 0 0 0-1.303-1.304 3.625 3.625 0 0 0-.638-.165 7.113 7.113 0 0 0-.92-.09 33.47 33.47 0 0 0-.863-.026 48.13 48.13 0 0 0-.942 0Zm6.132 2.798c.03.524.045 1.468.045 2.831s-.015 2.307-.045 2.831c-.06 1.237-.428 2.195-1.107 2.873-.679.679-1.638 1.049-2.877 1.11-.523.029-1.466.044-2.83.044-1.363 0-2.307-.015-2.832-.045-1.24-.06-2.198-.43-2.877-1.109-.679-.678-1.048-1.636-1.107-2.873-.03-.524-.044-1.468-.044-2.831s.014-2.307.044-2.831c.06-1.237.428-2.195 1.107-2.873.679-.679 1.638-1.049 2.877-1.11.525-.029 1.469-.044 2.832-.044 1.364 0 2.307.015 2.83.045 1.24.06 2.198.43 2.877 1.108.679.68 1.048 1.637 1.107 2.874Z"
    />
  </svg>
)
export default SvgComponent