import { memo } from "react";
interface Props {
  className?: string;
}
function DownArrowIcon({ className }: Props) {
  return (
    <svg
      width="10.000000"
      height="6.000000"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} down-arrow-icon`}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Icon"
        d="M1.175 0L5 3.71161L8.825 0L10 1.14825L5 6L0 1.14825L1.175 0Z"
        fillRule="nonzero"
        fill="#000000"
      />
    </svg>
  );
}
export default memo(DownArrowIcon);
