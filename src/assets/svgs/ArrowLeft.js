import * as React from "react";
import Svg, { Line, Polyline } from "react-native-svg";

const ArrowLeft = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="gray"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-left"
        {...props}
    >
        <Line x1={19} y1={12} x2={5} y2={12} />
        <Polyline points="12 19 5 12 12 5" />
    </Svg>
);
export default ArrowLeft;
