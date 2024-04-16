import RootContainer from 'app/screens/RootContainer'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return <RootContainer />
}

export default App
