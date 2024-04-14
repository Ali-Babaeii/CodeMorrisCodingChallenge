import Images from '@images'
import { ScreenParamList } from '@navigation/types'
import { theme } from '@themes/variables/ThemeProvider'
import React from 'react'
import { Image, SafeAreaView, TextInput, View } from 'react-native'

import styles from './styles'

export type ProductListScreenParamList = ScreenParamList<'ProductListScreen'>

const ProductListScreen = () => (
	<SafeAreaView style={styles.searchContainer}>
		<View style={styles.searchInputContainer}>
			<TextInput
				accessibilityLabel={'SearchField'}
				style={styles.textInput}
				autoCorrect={false}
				selectionColor={theme.brandTertiary}
				returnKeyType={'search'}
				placeholder={'Suche'}
				allowFontScaling={false}
				placeholderTextColor={theme.searchBarPlaceholder}
			/>
			<Image source={Images.icons.search} style={styles.searchAndBarcodeIcon} />
		</View>
	</SafeAreaView>
)

export default ProductListScreen
