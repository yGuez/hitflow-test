import React from 'react'
import Svg, { Path } from 'react-native-svg'

const FlagCircleStart = ({ ...props }: any) => {
    return (
        <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                fill="#E9ECF7"
            />
            <Path d="M14.3656 27.64V10" stroke="#1C2D6A" strokeWidth="1.44" />
            <Path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M14.3656 10.36L25.7 14.5406L14.3656 19V10.36Z"
                fill="#1C2D6A"
                stroke="#1C2D6A"
                strokeWidth="1.44"
            />
        </Svg>
    )
}

export default FlagCircleStart
