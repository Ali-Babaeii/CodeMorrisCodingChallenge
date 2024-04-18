import { theme } from '@themes/variables/ThemeProvider'
import { isAndroid } from '@utils/PlatformUtils'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	rootView: {
		flex: 1
	},
	searchAndBarcodeIcon: {
		tintColor: theme.searchBarIconColor,
		resizeMode: 'contain',
		width: 24,
		height: 24,
		marginTop: 1,
		marginRight: 5
	},
	mainContainer: {
		marginTop: 4,
		backgroundColor: theme.white,
		marginBottom: theme.searchInputContainerMarginBottom
	},
	searchInputContainer: {
		marginHorizontal: theme.searchInputContainerMarginHorizontal,
		borderWidth: theme.searchInputContainerBorderWidth,
		borderRadius: theme.searchInputBorderRadius,
		borderColor: theme.searchInputContainerColor,
		backgroundColor: theme.searchInputContainerColor,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: theme.searchInputContainerMarginTop,
		height: theme.searchInputContainerHeight
	},
	textInput: {
		paddingTop: 0,
		paddingBottom: 0,
		includeFontPadding: false,
		flex: 1,
		fontSize: isAndroid && theme.deviceWidth <= 360 ? theme.fontSize.major.extraSmall : theme.fontSize.major.medium,
		color: theme.brandDark,
		fontFamily: theme.fontFamily,
		textAlign: 'center'
	},
	resultTitle: {
		fontWeight: '500',
		fontSize: theme.fontSize.common.extraLarge,
		color: theme.gray,
		marginTop: 8,
		marginHorizontal: 20
	},
	listDivider: {
		height: 1,
		backgroundColor: theme.lightGray
	},
	changeLanguageIcon: { alignItems: 'flex-end', marginRight: 15 },
	modalContainer: {
		backgroundColor: theme.brandActive,
		width: '100%',
		borderRadius: 15,
		paddingHorizontal: 15,
		bottom: 0,
		paddingVertical: 40,
		position: 'absolute'
	},
	enButton: {
		backgroundColor: 'white',
		padding: 15,
		alignItems: 'center',
		borderRadius: 30
	},
	lngText: {
		fontSize: theme.fontSize.major.extraSmall,
		fontFamily: theme.fontFamily,
		fontWeight: '500'
	},
	deButton: {
		backgroundColor: 'white',
		borderRadius: 30,
		padding: 15,
		alignItems: 'center',
		marginTop: 20
	},
	cancelButton: {
		backgroundColor: 'white',
		borderRadius: 30,
		padding: 15,
		alignItems: 'center',
		marginTop: 50
	}
})

export default styles
