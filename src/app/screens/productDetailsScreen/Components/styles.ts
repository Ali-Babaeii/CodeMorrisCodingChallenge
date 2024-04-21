import { theme } from '@themes/variables/ThemeProvider'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	categoryContainer: {
		marginVertical: 15,
		borderRadius: 10,
		borderWidth: 1,
		padding: 18,
		borderColor: theme.lightGray
	},
	categoryText: {
		fontSize: theme.fontSize.common.medium,
		fontWeight: '500',
		fontFamily: theme.fontFamily,
		color: theme.darkGray
	},
	subCategoryText: {
		fontSize: theme.fontSize.common.medium,
		fontWeight: '500',
		fontFamily: theme.fontFamily,
		color: theme.darkGray,
		marginTop: 4
	},
	iconContainer: { marginBottom: 12, flexDirection: 'row' },
	categoryIcon: { width: 20, height: 20, marginRight: 10 }
})

export default styles
