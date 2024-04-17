import { Product } from 'app/models/Product' // Import the Product type
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ProductImage from '../../../components/ProductImage'
import styles from './styles'

interface ProductListCardProps {
	item: Product
	handleProductPress: (product: Product) => void
}

const ProductListCard: React.FC<ProductListCardProps> = ({ item, handleProductPress }) => {
	return (
		<TouchableOpacity onPress={() => handleProductPress(item)}>
			<View style={styles.listContainer}>
				<ProductImage productImage={item} width={120} height={120} />
				<View style={styles.listTitleContainer}>
					<View>
						<Text style={styles.productNameText}>{item.productName}</Text>
						<View style={styles.categoryTextContainer}>
							<Text>{item.quantity}</Text>
							<Text style={styles.categoryFormText}>{item.pharmaceuticalForm}</Text>
							<Text>{item.categorization}</Text>
						</View>
					</View>

					<View style={styles.priceContainer}>
						<Text style={styles.priceText}>{item.price} €</Text>
					</View>

					<View>
						<Text style={styles.stockText}>Auf Lager</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default ProductListCard
