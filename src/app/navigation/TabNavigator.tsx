import AccountTabBarIconComponent from '@components/AccountTabBarIconComponent'
import { CartTabBarIconComponent } from '@components/cart'
import TabBarNavigatorIconLabelComponent from '@components/TabBarNavigatorIconLabelComponent'
import Images from '@images'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '@themes/variables/ThemeProvider'
import CartScreen from 'app/screens/CartScreen/CartScreen'
import OrderHistoryScreen from 'app/screens/OrderHistoryScreen/OrderHistoryScreen'
import ProductListScreen from 'app/screens/ProdocutListScreen/ProductListScreen'
import ProductDetailsScreen from 'app/screens/productDetailsScreen/ProductDetailsScreen'

import React from 'react'

const BottomTabNavigator = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const ProductListStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="ProductListScreen" component={ProductListScreen} options={{ headerShown: false }} />
		<Stack.Screen
			name="ProductDetailsScreen"
			component={ProductDetailsScreen}
			options={{
				headerShown: true,
				headerTitle: '',
				headerBackTitleVisible: false
			}}
		/>
	</Stack.Navigator>
)
export const TabNavigator = (): JSX.Element => {
	return (
		<BottomTabNavigator.Navigator
			initialRouteName={'SearchNavigator'}
			screenOptions={{
				tabBarActiveTintColor: theme.brandActive,
				tabBarInactiveTintColor: theme.gray
			}}
		>
			<BottomTabNavigator.Screen
				name={'SearchNavigator'}
				component={ProductListStack}
				options={{
					tabBarLabel: 'Suche',
					tabBarIcon: (): JSX.Element => {
						return <TabBarNavigatorIconLabelComponent icon={Images.icons.assortment} />
					},
					headerShown: false,
					tabBarAccessibilityLabel: 'SearchTab'
				}}
			/>
			<BottomTabNavigator.Screen
				name={'Warenkorb'}
				component={CartScreen}
				options={{
					tabBarLabel: 'Warenkorb',
					tabBarIcon: (): JSX.Element => {
						return <CartTabBarIconComponent />
					},
					headerShown: true,
					tabBarAccessibilityLabel: 'CartTab'
				}}
			/>
			<BottomTabNavigator.Screen
				name={'Bestellungen'}
				component={OrderHistoryScreen}
				options={{
					tabBarLabel: 'Bestellungen',
					tabBarIcon: (): JSX.Element => {
						return <AccountTabBarIconComponent />
					},
					headerShown: true,
					tabBarAccessibilityLabel: 'OrdersTab'
				}}
			/>
		</BottomTabNavigator.Navigator>
	)
}
