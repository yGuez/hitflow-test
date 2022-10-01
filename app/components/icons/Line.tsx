import React from "react";
import Svg, { Path } from "react-native-svg";

const Line = ({ width, height, ...props }: any) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 3 39" fill="none">
      <Path
        d="M1.5 1.52857V37.4714"
        stroke="#1C2D6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 6"
      />
    </Svg>
  );
};

export default Line;
