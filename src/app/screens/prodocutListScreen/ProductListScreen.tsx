import Images from '@images'
import { useNavigation } from '@react-navigation/native'
import { theme } from '@themes/variables/ThemeProvider'
import { getProducts } from 'app/api/getProducts'
import { Product } from 'app/models/Product'
import ProductListCard from 'app/screens/ProdocutListScreen/Components/ProductListCard'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LanguageModal from './Components/LanguageModal'
import styles from './styles'

const changeIcon = require('../../assets/changeLanguage.png')

const ProductListScreen = () => {
	const allProducts: Product[] = getProducts()
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
	const [loadedProducts, setLoadedProducts] = useState(10) // Initial number of products loaded
	const navigation = useNavigation()
	const { t, i18n } = useTranslation()

	const [isModalVisible, setIsModalVisible] = useState(false)

	// Toggle modal visibility
	const toggleModal = () => {
		setIsModalVisible(!isModalVisible)
	}

	// Change language
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		toggleModal() // Close modal after language change
	}

	const handleProductPress = (product: Product) => {
		navigation.navigate('ProductDetailsScreen', { product })
	}

	const renderItem = ({ item }: { item: Product }) => (
		<ProductListCard item={item} handleProductPress={handleProductPress} />
	)

	// Search products function
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

	// Load 10 item when scrolling
	const loadMoreProducts = useCallback(() => {
		setLoadedProducts((prevLoadedProducts) => prevLoadedProducts + 10)
	}, [])

	return (
		<SafeAreaView style={styles.mainContainer}>
			<TouchableOpacity testID="language-icon" style={styles.changeLanguageIcon} onPress={toggleModal}>
				<Image source={changeIcon} style={{ width: 30, height: 30 }}></Image>
			</TouchableOpacity>
			<View style={styles.searchInputContainer}>
				<TextInput
					testID="search-input"
					accessibilityLabel={'SearchField'}
					style={styles.textInput}
					autoCorrect={false}
					selectionColor={theme.brandTertiary}
					returnKeyType={'search'}
					placeholder={t('search')}
					allowFontScaling={false}
					placeholderTextColor={theme.searchBarPlaceholder}
					value={searchQuery}
					onChangeText={handleSearch}
				/>
				<Image source={Images.icons.search} style={styles.searchAndBarcodeIcon} />
			</View>
			<View>
				<Text style={styles.resultTitle}>
					{filteredProducts.length} {t('result')}
				</Text>
				<FlatList
					data={filteredProducts.slice(0, loadedProducts)}
					renderItem={renderItem}
					keyExtractor={(item) => item.code}
					contentContainerStyle={{ paddingBottom: 150 }}
					ItemSeparatorComponent={() => <View style={styles.listDivider} />}
					onEndReached={loadMoreProducts}
					onEndReachedThreshold={0.1}
				/>
			</View>

			{/* Change language Modal */}
			<LanguageModal isVisible={isModalVisible} onClose={toggleModal} onChangeLanguage={changeLanguage} />
		</SafeAreaView>
	)
}

export default ProductListScreen
