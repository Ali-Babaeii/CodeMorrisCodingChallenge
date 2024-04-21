import { theme } from '@themes/variables/ThemeProvider'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	mainContainer: { paddingHorizontal: 20, backgroundColor: theme.white },
	imageContainer: { alignItems: 'center', justifyContent: 'center', marginVertical: 15 },
	productNameContainer: { marginVertical: 4 },
	ProdocutNameText: {
		fontSize: theme.fontSize.major.large,
		fontWeight: '500',
		fontFamily: theme.fontFamily,
		color: theme.darkGray
	},
	buttonContainer: { marginVertical: 20 },
	addToCartButton: {
		padding: 6,
		borderRadius: 10,

		height: 48,
		alignItems: 'center',
		justifyContent: 'center'
	},
	addToCartText: {
		color: theme.white,
		fontSize: theme.fontSize.common.extraLarge,
		fontFamily: theme.fontFamily,
		fontWeight: '500'
	},
	recieptButton: {
		padding: 6,
		borderRadius: 10,
		backgroundColor: theme.white,
		marginTop: 15,
		borderWidth: 1,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center'
	},
	recieptText: {
		color: theme.brandActive,
		fontSize: theme.fontSize.common.extraLarge,
		fontFamily: theme.fontFamily,
		fontWeight: '500'
	},
	detailsText: { fontSize: theme.fontSize.major.small, fontWeight: '600', color: theme.darkGray },
	descriptionText: { fontSize: theme.fontSize.major.small, fontWeight: '600', fontFamily: theme.fontFamily },
	showMoreButton: { marginVertical: 15 },
	showMoreText: { fontSize: 14, color: theme.brandActive, fontWeight: '500', fontFamily: theme.fontFamily }
})

export default styles
