import { IconTypes } from "@/app/types";
import { returnDefaultColor } from "@/app/utils/helpers";

const AwardIcon: React.FC<IconTypes> = ({ isActive, stroke, ...rest }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.55 9.18335V13.325C3.55 14.8417 3.55 14.8417 4.98333 15.8083L8.925 18.0833C9.51667 18.425 10.4833 18.425 11.075 18.0833L15.0167 15.8083C16.45 14.8417 16.45 14.8417 16.45 13.325V9.18335C16.45 7.66668 16.45 7.66668 15.0167 6.70001L11.075 4.42501C10.4833 4.08335 9.51667 4.08335 8.925 4.42501L4.98333 6.70001C3.55 7.66668 3.55 7.66668 3.55 9.18335Z"
        stroke={stroke || returnDefaultColor(isActive as boolean)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5833 6.35835V4.16669C14.5833 2.50002 13.75 1.66669 12.0833 1.66669H7.91667C6.25 1.66669 5.41667 2.50002 5.41667 4.16669V6.30002"
        stroke={stroke || returnDefaultColor(isActive as boolean)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.525 9.15836L11 9.90003C11.075 10.0167 11.2417 10.1334 11.3667 10.1667L12.2167 10.3834C12.7417 10.5167 12.8833 10.9667 12.5417 11.3834L11.9833 12.0584C11.9 12.1667 11.8333 12.3584 11.8417 12.4917L11.8917 13.3667C11.925 13.9084 11.5417 14.1834 11.0417 13.9834L10.225 13.6584C10.1 13.6084 9.89167 13.6084 9.76667 13.6584L8.95 13.9834C8.45 14.1834 8.06667 13.9 8.1 13.3667L8.15 12.4917C8.15833 12.3584 8.09167 12.1584 8.00833 12.0584L7.45 11.3834C7.10833 10.9667 7.25 10.5167 7.775 10.3834L8.625 10.1667C8.75833 10.1334 8.925 10.0084 8.99167 9.90003L9.46667 9.15836C9.76667 8.70836 10.2333 8.70836 10.525 9.15836Z"
        stroke={stroke || returnDefaultColor(isActive as boolean)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AwardIcon;
