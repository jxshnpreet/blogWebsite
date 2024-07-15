import * as React from "react"
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M16.633 21.975h3.687v11.061h-3.687V21.975Zm3.924-3.414c.007.543-.181.996-.565 1.361-.384.365-.889.547-1.515.547h-.023c-.61 0-1.1-.182-1.473-.547-.373-.365-.56-.818-.56-1.36 0-.553.193-1.008.576-1.368.384-.36.885-.541 1.502-.541.62 0 1.115.18 1.488.541.372.36.562.815.57 1.367Zm13.024 8.136v6.34h-3.673v-5.918c0-.78-.152-1.391-.454-1.836-.302-.442-.773-.664-1.412-.664-.471 0-.864.13-1.18.387a2.371 2.371 0 0 0-.708.955c-.084.222-.125.523-.125.903v6.172h-3.676c.016-2.968.025-5.376.025-7.222 0-1.845-.005-2.945-.014-3.303l-.011-.536h3.676v1.608h-.023c.15-.239.303-.447.46-.625.155-.18.365-.373.63-.58.265-.21.59-.372.974-.486a4.45 4.45 0 0 1 1.279-.173c1.273 0 2.297.423 3.072 1.267.773.845 1.16 2.082 1.16 3.711Z"
    />
  </svg>
)
export default SvgComponent
