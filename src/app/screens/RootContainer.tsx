import MainStackNavigator from '@navigation/MainStackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from '@themes/variables/ThemeProvider'
import styles from 'app/screens/prodocutListScreen/styles'
import React from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootContainer = (): JSX.Element => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<StatusBar
					barStyle={theme.statusBarDefault as StatusBarStyle}
					backgroundColor={theme.brandPrimary}
					animated
				/>
				<GestureHandlerRootView style={styles.rootView}>
					<MainStackNavigator />
				</GestureHandlerRootView>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default RootContainer
