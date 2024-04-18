import ProductImage from '@components/ProductImage'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import HTML from 'react-native-render-html'
import CartStore from '../../mobx/CartStore'
import ProductDetailsCard from './Components/ProductDetailsCard'
import styles from './styles'

const ProductDetailsScreen = ({ route }) => {
	const { product } = route.params || {}
	const [showFullDescription, setShowFullDescription] = useState(false)
	const { t } = useTranslation()

	// Showing full description function
	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription)
	}
	const descriptionToShow = showFullDescription
		? product.descriptionAsHtml
		: `${product.descriptionAsHtml.slice(0, 400)}...`

	const showMoreButton = product.descriptionAsHtml.length > 200 && !showFullDescription

	// Add item to cart function
	const addToCart = (category) => {
		if (category === 'Rezeptfreie Produkte') {
			CartStore.addItem(product, 'Rezeptfreie Produkte')
		} else if (category === 'Kassenrezept für') {
			CartStore.addItem(product, 'Kassenrezept für')
		}
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<ProductImage productImage={product} width={250} height={250}></ProductImage>
			</View>
			<View>
				<View style={styles.productNameContainer}>
					<Text style={styles.ProdocutNameText}>{product.productName}</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart('Rezeptfreie Produkte')}>
						<Text style={styles.addToCartText}>{t('addCart')}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.recieptButton} onPress={() => addToCart('Kassenrezept für')}>
						<Text style={styles.recieptText}>{t('redeem')}</Text>
					</TouchableOpacity>
				</View>
				<View>
					<Text style={styles.detailsText}>Details</Text>
					<ProductDetailsCard product={product}></ProductDetailsCard>
				</View>
				<View>
					<Text style={styles.descriptionText}>{t('description')}</Text>
					<HTML source={{ html: descriptionToShow }} contentWidth={300} />
					{showMoreButton && (
						<Pressable style={styles.showMoreButton} onPress={toggleDescription}>
							<Text style={styles.showMoreText}>{t('show More')}</Text>
						</Pressable>
					)}
				</View>
			</View>
		</ScrollView>
	)
}

export default ProductDetailsScreen
