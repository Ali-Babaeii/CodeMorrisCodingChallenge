import { theme } from '@themes/variables/ThemeProvider'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	categoryContainer: {
		flexDirection: 'row',
		width: '100%',
		padding: 20,
		marginBottom: 4,
		backgroundColor: 'white',
		alignItems: 'center',
		borderTopWidth: 4,
		justifyContent: 'center',
		borderRadius: 8
	},
	cardContainer: { flex: 1, marginHorizontal: 10 },

	productNameText: {
		fontSize: theme.fontSize.common.large,
		fontWeight: 'bold',
		fontFamily: theme.fontFamily,
		color: theme.darkGray
	},
	quantityContainer: { flexDirection: 'row', alignItems: 'center' },
	quantityButton: {
		backgroundColor: theme.lightGray,
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 8
	},
	quantityText: { marginVertical: 8, fontFamily: theme.fontFamily, color: theme.darkGray },
	deleteIcon: { width: 16, height: 22, marginVertical: 3 },
	dectementText: { fontSize: 25 },
	conterText: { marginHorizontal: 10, fontWeight: '500', fontSize: 16 },
	priceText: {
		right: 0,
		position: 'absolute',
		bottom: 0,
		fontSize: 16,
		fontWeight: '500'
	},
	productsContainer: { flex: 1, paddingVertical: 20, paddingHorizontal: 20 },
	categoryText: {
		fontSize: 14,
		fontWeight: '500',
		marginVertical: 8
	},
	emptyBasketContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 1
	},
	emptyBasketText: {
		fontSize: theme.fontSize.major.small,
		fontWeight: '600',
		fontFamily: theme.fontFamily
	},
	totalPriceContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
	totalPriceText: { fontSize: 16, fontWeight: '600' },
	totalPriceNumber: { fontSize: 16, fontWeight: '600' },
	orderButton: {
		padding: 6,
		borderRadius: 10,
		backgroundColor: theme.brandActive,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	},
	orderText: {
		color: theme.white,
		fontSize: theme.fontSize.common.extraLarge,
		fontFamily: theme.fontFamily,
		fontWeight: '500'
	}
})

export default styles
