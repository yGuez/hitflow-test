import { StyleSheet, View } from 'react-native'
import { colors, spacing, font } from '../../../pages/styles'
import { MissionType } from '../../../utils/types'
import Text from '../Text'
import Badge, { badgeColors } from './Badge'
import Waypoints from './Waypoints'

const MissionCard = ({ mission }: { mission: MissionType }) => {
    const quotationText =
        mission?.quotations <= 5
            ? `O - ${mission?.quotations} devis`
            : `+ 5 devis`

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.left}>
                    <Waypoints {...mission} />
                    <Text
                        bold
                        style={{
                            fontSize: font.size.l,
                            marginTop: spacing.m,
                        }}
                    >
                        {mission?.costumer}
                    </Text>
                </View>
                <View style={styles.right}>
                    <Badge text={quotationText} color={badgeColors.blueDark} />

                    <View style={{ marginLeft: spacing.s }}>
                        <Text
                            bold
                            style={{
                                fontSize: font.size.xl,
                                color: colors.blueDark,
                                marginTop: spacing.m,
                            }}
                        >
                            {mission?.price} €{' '}
                            <Text style={{ color: '#4569EA' }}>*</Text>
                        </Text>
                        <Text style={{ color: colors.blueDark }}>
                            {mission?.km} km
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {mission?.options?.map((option: any) => (
                        <View style={{ marginRight: spacing.xs }} key={option}>
                            <Badge
                                text={option}
                                color={badgeColors.blueMedium}
                            />
                        </View>
                    ))}
                </View>
                <Text
                    bold
                    style={{ color: colors.grey, fontSize: font.size.s }}
                >{`Mission n° ${mission?.reference}`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.m,
        borderRadius: 10,
        display: 'flex',
        backgroundColor: colors.white,
        marginBottom: spacing.m,
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    waypoint: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    left: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: font.size.m,
        textAlign: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    right: {},
    bottom: {
        display: 'flex',
        marginTop: spacing.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: colors.blueLight,
        paddingTop: spacing.m,
        alignItems: 'center',
    },
})

export default MissionCard
