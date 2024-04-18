import RootContainer from 'app/screens/RootContainer'
import i18next from 'i18next'
import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import SplashScreen from 'react-native-splash-screen'
import deTranslation from '../localization/de/translation.json'
import enTranslation from '../localization/en/translation.json'

// Initialize i18next
i18next.init({
	interpolation: { escapeValue: false },
	lng: 'de',
	resources: {
		en: { translation: enTranslation },
		de: { translation: deTranslation }
	}
})

const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return (
		<I18nextProvider i18n={i18next}>
			<RootContainer />
		</I18nextProvider>
	)
}

export default App
