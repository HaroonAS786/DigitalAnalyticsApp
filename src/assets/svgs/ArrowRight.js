import * as React from "react";
import Svg, { Line, Polyline } from "react-native-svg";

const ArrowRight = (props) => (
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
        className="feather feather-arrow-right"
        {...props}
    >
        <Line x1={5} y1={12} x2={19} y2={12} />
        <Polyline points="12 5 19 12 12 19" />
    </Svg>
);
export default ArrowRight;
