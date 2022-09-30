import React from "react";
import Svg, { Path } from "react-native-svg";

const Arrow = ({ width, height, color, ...props }:any) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 15" {...props}>
      <Path
        d="M6.5 1.13604L12.864 7.5L6.5 13.864"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Arrow;
