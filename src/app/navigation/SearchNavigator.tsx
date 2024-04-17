import { SearchNavigatorParamList } from '@navigation/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductListScreen from 'app/screens/ProdocutListScreen/ProductListScreen'
import React from 'react'

const SearchNativeStackNavigator = createNativeStackNavigator<SearchNavigatorParamList>()

export const SearchNavigator = (): JSX.Element => {
	return (
		<SearchNativeStackNavigator.Navigator
			screenOptions={(): object => ({
				gestureEnabled: true,
				animationTypeForReplace: 'push',
				animation: 'simple_push',
				initialRouteName: 'ProductListScreen'
			})}
		>
			<SearchNativeStackNavigator.Screen name={'ProductListScreen'} component={ProductListScreen} />
		</SearchNativeStackNavigator.Navigator>
	)
}
