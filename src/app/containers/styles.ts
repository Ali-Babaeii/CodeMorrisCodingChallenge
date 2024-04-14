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
		marginTop: 1
	},
	searchContainer: {
		marginTop: 4,
		marginRight: 12,
		marginLeft: 12,
		marginBottom: theme.searchInputContainerMarginBottom,
		flexDirection: 'row'
	},
	searchInputContainer: {
		flex: 1,
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
	}
})

export default styles
