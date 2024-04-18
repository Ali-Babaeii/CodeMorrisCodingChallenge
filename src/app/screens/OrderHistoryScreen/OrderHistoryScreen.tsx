import ProductImage from '@components/ProductImage'
import { theme } from '@themes/variables/ThemeProvider'
import { Product } from 'app/models/Product'
import { observer } from 'mobx-react'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HistoryStore from '../../mobx/HistoryStore'
import styles from './styles'
const OrderHistoryScreen = () => {
	const categorizedItems = {}

	// Iterate over the first 10 orders only
	HistoryStore.history.slice(0, 10).forEach((order) => {
		const orderDate = order.date
		order.items.forEach((product: Product) => {
			if (!categorizedItems[product.category]) {
				categorizedItems[product.category] = []
			}
			categorizedItems[product.category].push({ ...product, date: orderDate })
		})
	})

	//Generate random order number function
	function generateSixDigitNumber() {
		const min = 100000
		const max = 999999
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const renderCategoryItems = (category, items) => (
		<View style={styles.categoryWrapper} key={category}>
			<View style={styles.dateContainer}>
				<Text style={styles.dateText}>{items[0].date}</Text>

				<Text style={styles.orderNumberText}>Bestellnummer: {generateSixDigitNumber()}</Text>
				<Text style={styles.orderStatusText}>Bestellung eingegangen</Text>
			</View>
			<Text
				style={{
					...styles.categoryText,
					color: category === 'Rezeptfreie Produkte' ? theme.darkGray : theme.pink
				}}
			>
				{category}
			</Text>
			{items.map((product: Product, index: number) => (
				<View
					key={index}
					style={{
						...styles.categoryContainer,
						borderTopColor: category === 'Rezeptfreie Produkte' ? theme.darkGray : theme.pink
					}}
				>
					<View style={styles.cardContainer}>
						<ProductImage productImage={product} width={120} height={120} />
						<View style={styles.textWrapper}>
							<Text style={styles.productNameText}>{product.productName}</Text>
							<Text style={styles.barcodeText}>PZN: {product.code}</Text>
							<Text style={styles.quantityText}>Anzahl {product.quantity}</Text>
						</View>
					</View>
				</View>
			))}
		</View>
	)

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 15 }}>
			{Object.keys(categorizedItems).map((category) => renderCategoryItems(category, categorizedItems[category]))}
		</ScrollView>
	)
}

export default observer(OrderHistoryScreen)
