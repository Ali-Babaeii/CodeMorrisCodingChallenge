import ProductImage from '@components/ProductImage'
import { useNavigation } from '@react-navigation/native'
import { theme } from '@themes/variables/ThemeProvider'
import { Product } from 'app/models/Product'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CartStore from '../../mobx/CartStore'
import styles from './styles'

const basket = require('../../assets/basket.png')
const deleteIcon = require('../../assets/delete.png')

const CartScreen = () => {
	const navigation = useNavigation()

	const getTotalPrice = () => {
		let totalPrice = 0
		CartStore.items.forEach((item: Product) => {
			// Add type annotation for item
			totalPrice += item.price * item.quantity
		})
		return totalPrice.toFixed(2)
	}

	const updateQuantity = action((item: Product, decrement: boolean) => {
		const existingItem = CartStore.items.find((cartItem) => cartItem.code === item.code)

		// Increment and decrement quantity
		if (existingItem) {
			if (decrement && existingItem.quantity > 1) {
				existingItem.quantity--
			} else if (!decrement) {
				existingItem.quantity++
			} else {
				CartStore.removeItem(existingItem.id)
			}
		}
	})

	const checkout = () => {
		CartStore.moveToHistory()
		navigation.navigate('Bestellungen')
	}

	const renderItem = ({ item, category }: { item: Product; category: string }) => (
		<View
			style={{
				...styles.categoryContainer,
				borderTopColor: category === 'Rezeptfreie Produkte' ? '#E6007E' : '#343434'
			}}
		>
			<ProductImage productImage={item} width={110} height={110} />
			<View style={styles.cardContainer}>
				<Text style={styles.productNameText}>{item.productName}</Text>
				<Text style={styles.quantityText}>Menge:</Text>
				<View style={styles.quantityContainer}>
					<TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item, true)}>
						{item.quantity == 1 ? (
							<Image source={deleteIcon} style={styles.deleteIcon}></Image>
						) : (
							<Text style={styles.dectementText}>-</Text>
						)}
					</TouchableOpacity>
					<Text style={styles.conterText}>{item.quantity}</Text>
					<TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item, false)}>
						<Text style={styles.dectementText}>+</Text>
					</TouchableOpacity>
					<Text style={styles.priceText}>{`${(item.price * item.quantity).toFixed(2)} €`}</Text>
				</View>
			</View>
		</View>
	)

	const groupedItems = Object.entries(
		CartStore.items.reduce((acc: any, item: any) => {
			if (!acc[item.category]) acc[item.category] = []
			acc[item.category].push(item)
			return acc
		}, {})
	)

	return (
		<View style={styles.productsContainer}>
			{CartStore.items.length > 0 ? (
				<FlatList
					data={groupedItems}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item[0]}
					renderItem={({ item }: { item: any }) => (
						<>
							<Text
								style={{
									...styles.categoryText,
									color: item[0] === 'Rezeptfreie Produkte' ? theme.pink : theme.darkGray
								}}
							>
								{item[0]}
							</Text>
							<FlatList
								data={item[1]}
								showsVerticalScrollIndicator={false}
								keyExtractor={(item, index) => index.toString()}
								renderItem={({ item }) => renderItem({ item, category: item.category })}
							/>
						</>
					)}
				/>
			) : (
				<View style={styles.emptyBasketContainer}>
					<Text style={styles.emptyBasketText}>Your cart is empty</Text>
					<Image source={basket} style={{ width: 35, height: 35, marginLeft: 10 }} />
				</View>
			)}
			<View style={styles.totalPriceContainer}>
				<Text style={styles.totalPriceText}>Gesamtpreis</Text>
				<Text style={styles.totalPriceNumber}>{getTotalPrice()} €</Text>
			</View>
			<TouchableOpacity style={styles.orderButton} onPress={checkout}>
				<Text style={styles.orderText}>Kostenpflichtig bestellen</Text>
			</TouchableOpacity>
		</View>
	)
}

export default observer(CartScreen)
