import * as React from "react";
import Svg, { Polyline } from "react-native-svg";

const ChevronIconRight = (props) => (

    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-right"
        {...props}
    >
        <Polyline points="9 18 15 12 9 6" />
    </Svg>
);
export default ChevronIconRight;