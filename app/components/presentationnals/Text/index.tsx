import { ReactNode } from 'react'
import { Text as NativeText, StyleSheet, StyleProp } from 'react-native'

const Text = ({
    children,
    bold,
    style,
    ...props
}: {
    children: ReactNode
    bold?: boolean
    style?: StyleProp<any>
}) => {
    return (
        <NativeText
            style={[styles.text, ...(bold ? [styles.bold] : []), style]}
            {...props}
        >
            {children}
        </NativeText>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MerriweatherSans',
    },
    bold: {
        fontFamily: 'MerriweatherSansBold',
    },
})

export default Text
