import { theme } from '@themes/variables/ThemeProvider'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	categoryContainer: {
		width: '100%',
		padding: 10,
		marginBottom: 4,
		backgroundColor: 'white',
		borderTopWidth: 4,
		justifyContent: 'center',
		borderRadius: 8
	},
	categoryWrapper: { backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 8, borderRadius: 8 },
	categoryText: {
		fontSize: theme.fontSize.common.extraLarge,
		fontWeight: '500',
		marginBottom: 10
	},
	dateText: { fontSize: 18, fontWeight: '600', fontFamily: theme.fontFamily, color: theme.darkGray },
	orderNumberText: {
		fontSize: theme.fontSize.common.large,
		fontWeight: '300',
		marginTop: 5,
		color: theme.darkGray,
		fontFamily: theme.fontFamily
	},
	orderStatusText: { marginTop: 16, fontWeight: '600', color: theme.brandActive, fontFamily: theme.fontFamily },
	dateContainer: { marginHorizontal: 12, marginBottom: 20 },
	cardContainer: { flexDirection: 'row', alignItems: 'center' },
	productNameText: {
		fontSize: theme.fontSize.common.large,
		fontWeight: 'bold',
		fontFamily: theme.fontFamily,
		color: theme.darkGray
	},
	textWrapper: { marginLeft: 10, flex: 1 },
	barcodeText: {
		marginVertical: 5,
		fontSize: theme.fontSize.common.extraLarge,
		fontWeight: '400',
		fontFamily: theme.fontFamily,
		color: theme.darkGray
	},
	quantityText: {
		fontSize: theme.fontSize.common.extraLarge,
		fontWeight: '400',
		fontFamily: theme.fontFamily,
		color: theme.darkGray
	}
})

export default styles
