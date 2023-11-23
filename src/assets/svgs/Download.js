import * as React from "react";
import Svg, { Polyline, Line, Path } from "react-native-svg";

const DownloadIcon = (props) => (
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
        className="feather feather-download-cloud"
        {...props}
    >
        <Polyline points="8 17 12 21 16 17" />
        <Line x1={12} y1={12} x2={12} y2={21} />
        <Path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
    </Svg>
);
export default DownloadIcon;