import React from "react";
import Svg, { Path } from "react-native-svg";

const FlagCircleEnd = ({ ...props }: any) => {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
        fill="#E9ECF7"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.35 16.7666L19.2019 14.4783L21.4948 15.3016L20.6429 17.5899L18.35 16.7666Z"
        fill="#1C2D6A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4902 9L8 26.4553L9.51269 26.9984L12.5986 18.6997L25.2304 23.2419L28.6379 14.0854L14.4902 9ZM17.0204 13.8021L14.7259 12.9788L15.5778 10.6889L17.8707 11.5137L17.0204 13.8021L19.3133 14.627L20.1652 12.337L22.4597 13.1635L21.6079 15.4503L23.9024 16.2751L24.7543 13.9868L27.0472 14.8101L26.1953 17.1L23.9024 16.2751L23.0521 18.565L25.345 19.3883L24.4931 21.6783L22.2002 20.855L23.0521 18.565L20.7576 17.7402L19.9057 20.0285L17.6112 19.2052L18.4631 16.9169L16.1685 16.092L15.3167 18.3803L13.0237 17.557L13.8756 15.2671L16.1685 16.092L17.0204 13.8021Z"
        fill="#1C2D6A"
      />
    </Svg>
  );
};

export default FlagCircleEnd;
