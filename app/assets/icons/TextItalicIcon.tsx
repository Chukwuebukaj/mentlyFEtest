import { IconTypes } from "@/app/types";

const TextItalicIcon: React.FC<IconTypes> = (props) => {
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
        d="M4.81 1.5H9.435"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.56 10.5H7.185"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 1.5L4.875 10.5"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TextItalicIcon;
