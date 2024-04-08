import React from 'react'
import { View, StyleSheet } from 'react-native'
import { spacing, font, colors } from '../../../../pages/styles'
import { WaypointType } from '../../../../utils/types'
import FlagCircleEnd from '../../../icons/FlagCircleEnd'
import FlagCircleStart from '../../../icons/FlagCircleStart'
import Line from '../../../icons/Line'
import Text from '../../Text'
import { format } from 'fecha'

const Waypoints = ({
    departure,
    arrival,
}: {
    departure: WaypointType
    arrival: WaypointType
}) => {
    return (
        <View>
            <View style={styles.waypoint}>
                <FlagCircleStart />
                <View style={{ marginLeft: spacing.s }}>
                    <Text style={{ fontSize: font.size.l }}>
                        {departure?.city} ({departure?.postalCode})
                    </Text>
                    <Text style={{ fontSize: font.size.s, color: colors.grey }}>
                        {format(departure?.date, 'DD/MM hh:mm')}
                    </Text>
                </View>
            </View>
            <View style={{ marginLeft: spacing.s }}>
                <Line width={3} height={39} />
            </View>
            <View style={styles.waypoint}>
                <FlagCircleEnd />
                <View style={{ marginLeft: spacing.s }}>
                    <Text style={{ fontSize: font.size.l }}>
                        {arrival?.city} ({arrival?.postalCode})
                    </Text>
                    <Text style={{ fontSize: font.size.s, color: colors.grey }}>
                        {format(departure?.date, 'DD/MM hh:mm')}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    waypoint: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
})

export default Waypoints
