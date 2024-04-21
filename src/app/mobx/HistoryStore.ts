import { action, makeObservable, observable } from 'mobx'

interface HistoryItem {
	code: string
	quantity: number
	id: number
	date: string
}

class HistoryStore {
	history: HistoryItem[] = []

	constructor() {
		makeObservable(this, {
			history: observable,
			addItems: action
		})
	}

	// Method to add items to history
	addItems(items) {
		const currentDate = new Date().toLocaleDateString()
		this.history.push({ date: currentDate, items: [...items] })
	}
}

const historyStore = new HistoryStore()
export default historyStore
