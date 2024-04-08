import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Avatar from '../../components/presentationnals/Avatar'
import Menu from '../../components/presentationnals/Menu'
import ScreenTemplate from '../../components/presentationnals/ScreenTemplate'
import { AppContext } from '../../context/AppContext'
import { colors, spacing } from '../styles'

const menuItems = [
    { label: 'Mes informations', url: 'Informations' },
    { label: 'Mes missions', url: 'Missions' },
]

const Home = ({ navigation }: any) => {
    const { state } = useContext(AppContext)

    return (
        <ScreenTemplate headerPadding={spacing.s}>
            <SafeAreaView>
                <View style={styles.page}>
                    <Avatar
                        name={`${state.user.firstname} ${state.user.lastname}`}
                        email={state.user.email}
                        imageUrl={require('../../../assets/driver.png')}
                    />
                    <Menu navigation={navigation} items={menuItems} />
                </View>
            </SafeAreaView>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: colors.blueLight,
        paddingTop: spacing.l,
    },
})

export default Home
