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
	stockText: { fontSize: 12, color: theme.brandTertiary, fontWeight: '500' }
})

export default styles
