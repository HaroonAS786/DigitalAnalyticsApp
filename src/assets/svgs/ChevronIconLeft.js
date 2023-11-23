import * as React from "react";
import Svg, { Polyline } from "react-native-svg";

const ChevronIconLeft = (props) => (
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
        className="feather feather-chevron-left"
        {...props}
    >
        <Polyline points="15 18 9 12 15 6" />
    </Svg>
);
export default ChevronIconLeft;