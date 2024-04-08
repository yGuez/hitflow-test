import { StyleSheet, ViewStyle, Platform } from 'react-native'
import Constants from 'expo-constants'

export const colors = {
    blueGradient: 'linear-gradient(to right, #62bdfe, #6833cb)',
    blueLight: '#F4F6FB',
    blueMedium: '#C8D0EB',
    blueDark: '#1C2D6A',
    grey: '#7C879D',
    white: '#FFFFFF',
}

const baseSpacing = 5
export const spacing = {
    xs: baseSpacing,
    /** 15 */
    s: baseSpacing * 3,
    /** 20 */
    m: baseSpacing * 4,
    /** 30 */
    l: baseSpacing * 6,
}

export const font = {
    family: {},
    letterSpacing: {
        default: 0,
        title: 1,
    },
    size: {
        s: 12,
        m: 15,
        l: 17,
        xl: 25,
    },
}
