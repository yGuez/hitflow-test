import React from 'react'
import useCachedResources from './hooks/useCachedResources'
import { useFonts } from 'expo-font'
import Navivation from './app/navigation'
import { AppContextProvider } from './app/context/AppContext'

export default function App() {
    const isLoadingComplete = useCachedResources()

    const [fontsLoaded] = useFonts({
        MerriweatherSans: require('./assets/fonts/MerriweatherSans-VariableFont_wght.ttf'),
        MerriweatherSansBold: require('./assets/fonts/MerriweatherSans-Bold.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <AppContextProvider>
                <Navivation />
            </AppContextProvider>
        )
    }
}
