import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MissionCard from '../../components/presentationnals/MissionCard'
import ScreenTemplate from '../../components/presentationnals/ScreenTemplate'
import { spacing } from '../styles'
import { MissionType } from '../../utils/types'

export interface MissionsProps {
    missionsList: MissionType[]
}

const Missions = ({ missionsList }: MissionsProps) => {
    return (
        <ScreenTemplate headerPadding={spacing.xs}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.page}>
                        {missionsList.map((mission, i) => {
                            return (
                                <MissionCard
                                    mission={mission}
                                    key={`${mission.reference}-${i}`}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        padding: spacing.s,
        height: '100%',
        backgroundColor: 'transparent',
    },
})

export default Missions
