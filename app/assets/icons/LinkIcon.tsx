import { IconTypes } from "@/app/types";

const LinkIcon: React.FC<IconTypes> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.52998 5.47C7.65498 6.595 7.65498 8.415 6.52998 9.535C5.40498 10.655 3.58498 10.66 2.46498 9.535C1.34498 8.41 1.33998 6.59 2.46498 5.47"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29498 6.705C4.12498 5.535 4.12498 3.635 5.29498 2.46C6.46498 1.285 8.36498 1.29 9.53998 2.46C10.715 3.63 10.71 5.53 9.53998 6.705"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkIcon;
