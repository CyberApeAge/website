import { NextPage } from "next/types";
import { BaseBackgroundSVG } from "./styles";

const BaseBackground: NextPage = () => {
  return (
    <BaseBackgroundSVG
      width={203}
      height={48}
      viewBox="0 0 203 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M201.5 19.547L186.302 1.5H1.5v29.435L15.179 46.5H201.5V19.547zM14.5 48L0 31.5V0h187l16 19v29H14.5z"
        fill="#fff"
        fillOpacity={0.35}
      />
    </BaseBackgroundSVG>
  );
};

export default BaseBackground;
