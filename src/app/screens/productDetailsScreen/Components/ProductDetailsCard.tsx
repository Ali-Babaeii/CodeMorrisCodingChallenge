import { Product } from 'app/models/Product'
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

interface ProductDetailsProps {
	product: Product
}
const packung = require('../../../assets/package.png')
const pills = require('../../../assets/pills.png')
const barcode = require('../../../assets/barcode.png')
const company = require('../../../assets/company.png')

const ProductDetailsCard: React.FC<ProductDetailsProps> = ({ product }) => {
	const data = [
		{ title: 'Packungsgröße', value: product.quantity, imageUrl: packung },
		{ title: 'Darreichungsform', value: product.pharmaceuticalForm, imageUrl: pills },
		{ title: 'PZN', value: product.code, imageUrl: barcode },
		{ title: 'Hersteller', value: product.companyName, imageUrl: company }
	]

	return (
		<View style={styles.categoryContainer}>
			{data.map((item, index) => (
				<View key={index} style={styles.iconContainer}>
					<Image source={item.imageUrl} style={styles.categoryIcon} />

					<View>
						<Text style={styles.categoryText}>{item.title}</Text>
						<Text style={styles.subCategoryText}>{item.value}</Text>
					</View>
				</View>
			))}
		</View>
	)
}

export default ProductDetailsCard
