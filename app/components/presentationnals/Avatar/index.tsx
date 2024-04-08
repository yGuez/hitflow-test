import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native'
import { colors, font, spacing } from '../../../pages/styles'
import Text from '../Text'

const Avatar = ({
    imageUrl,
    name,
    email,
}: {
    imageUrl: ImageSourcePropType
    name: string
    email: string
}) => {
    return (
        <View style={styles.container}>
            <Image source={imageUrl} />
            <Text bold style={styles.name}>
                {name}
            </Text>
            <Text style={styles.email}> {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.l,
    },
    name: {
        fontSize: font.size.xl,
        textAlign: 'center',
    },
    email: {
        color: colors.blueMedium,
        fontSize: font.size.m,
    },
})

export default Avatar
