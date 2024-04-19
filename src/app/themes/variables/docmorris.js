/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @flow
import { Dimensions, PixelRatio, Platform } from 'react-native'
// import DeviceInfo from 'react-native-device-info'

import { isIOS, PLATFORM } from '../../utils/PlatformUtils'
import { theme } from './ThemeProvider'

const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS

const fontSize = {
	minor: {
		extraSmall: 5,
		small: 6,
		medium: 7,
		large: 8,
		extraLarge: 9
	},
	common: {
		extraSmall: 10,
		small: 11,
		medium: 12,
		large: 13,
		extraLarge: 14
	},
	major: {
		extraSmall: 15,
		small: 16,
		medium: 17,
		large: 18,
		extraLarge: 24
	}
}

const docmorris = {
	deviceWidth,
	fontSize,
	brandGrey: '#666',
	lightGray: '#F2F2F2',
	darkGray: '#343434',
	brandActive: '#00463d',
	brandTertiary: '#00965a',
	white: '#ffff',
	gray: '#727272',
	pink: '#E6007E',
	get badgeColor() {
		return this.brandTertiary
	},
	inverseTextColor: '#fff',
	searchBarPlaceholder: '#a8a8a8',
	statusBarDefault: platform === PLATFORM.IOS ? 'dark-content' : 'light-content',
	brandPrimary: '#00463d',
	searchInputContainerPadding: 3,
	searchInputContainerHeight: 42,
	searchInputContainerMarginTop: 8,
	searchInputContainerMarginBottom: 6,
	searchInputContainerMarginHorizontal: 8,
	searchInputContainerBorderWidth: 2,
	searchInputContainerColor: '#f2f2f2',
	searchBarIconColor: '#a8a8a8',
	searchInputBorderRadius: 10,
	brandDark: '#222',
	fontFamily: 'Poppins-Regular'
}

export default docmorris
