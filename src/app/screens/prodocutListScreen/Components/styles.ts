import { theme } from '@themes/variables/ThemeProvider'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 25
	},
	listTitleContainer: { flex: 1 },
	productNameText: { fontWeight: 'bold' },
	categoryTextContainer: { flexDirection: 'row', flex: 1, marginTop: 8 },
	categoryFormText: { marginHorizontal: 15 },
	priceContainer: { marginVertical: 15 },
	priceText: { fontSize: 16, fontWeight: '600' },
	stockText: { fontSize: 12, color: theme.brandTertiary, fontWeight: '500' },
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
