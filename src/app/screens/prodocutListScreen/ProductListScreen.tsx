import Images from '@images'
import { ScreenParamList } from '@navigation/types'
import { theme } from '@themes/variables/ThemeProvider'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TextInput, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { getProducts } from 'app/api/getProducts'
import { Product } from 'app/models/Product'
import ProductListCard from 'app/screens/ProdocutListScreen/Components/ProductListCard'
import styles from './styles'

export type ProductListScreenParamList = ScreenParamList<'ProductListScreen'>

const ProductListScreen = () => {
	const allProducts: Product[] = getProducts()
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
	const navigation = useNavigation()

	const handleProductPress = (product: Product) => {
		navigation.navigate('ProductDetailsScreen', { product })
	}

	const renderItem = ({ item }: { item: Product }) => (
		<ProductListCard item={item} handleProductPress={handleProductPress} />
	)

	const handleSearch = (query: string) => {
		setSearchQuery(query)
		if (query.trim() === '') {
			setFilteredProducts(allProducts)
		} else {
			const filtered = allProducts.filter((product) =>
				product.productName.toLowerCase().includes(query.toLowerCase())
			)
			setFilteredProducts(filtered)
		}
	}

	return (
		<SafeAreaView style={styles.mainContainer}>
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
					value={searchQuery}
					onChangeText={handleSearch}
				/>
				<Image source={Images.icons.search} style={styles.searchAndBarcodeIcon} />
			</View>
			<View>
				<Text style={styles.resultTitle}>{filteredProducts.length} Ergebnisse</Text>
				<FlatList
					data={filteredProducts}
					renderItem={renderItem}
					keyExtractor={(item) => item.code}
					ItemSeparatorComponent={() => <View style={styles.listDivider} />}
				/>
			</View>
		</SafeAreaView>
	)
}

export default ProductListScreen
