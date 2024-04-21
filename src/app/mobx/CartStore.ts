import { action, makeObservable, observable } from 'mobx'
import HistoryStore from './HistoryStore'

interface CartItem {
	code: string
	quantity: number
	id: number
}

class CartStore {
	items: CartItem[] = []

	constructor() {
		makeObservable(this, {
			items: observable,
			addItem: action,
			removeItem: action,
			moveToHistory: action
		})
	}

	addItem(item, category: CartItem) {
		const existingItem = this.items.find((cartItem) => cartItem.code === item.code)

		if (existingItem) {
			// If item with the same code already exists in the cart, increment its quantity
			existingItem.quantity++
		} else {
			// If item doesn't exist in the cart, add it with the specified category
			this.items.push({ ...item, quantity: 1, category })
		}
	}

	removeItem(index: number) {
		this.items.splice(index, 1)
	}

	moveToHistory() {
		HistoryStore.addItems(this.items)
		this.items = []
	}
}

const cartStore = new CartStore()
export default cartStore
