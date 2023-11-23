import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BracketsIcon = (props) => (
    <Svg
        fill="#000000"
        width="24"
        height="24"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M48,48V208H80a8,8,0,0,1,0,16H40a8.00039,8.00039,0,0,1-8-8V40a8.00039,8.00039,0,0,1,8-8H80a8,8,0,0,1,0,16ZM216,32H176a8,8,0,0,0,0,16h32V208H176a8,8,0,0,0,0,16h40a8.00039,8.00039,0,0,0,8-8V40A8.00039,8.00039,0,0,0,216,32Z" />
    </Svg>
);
export default BracketsIcon;