import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductListScreen from 'app/screens/ProdocutListScreen/ProductListScreen';

describe('ProductListScreen', () => {
	test('renders correctly', () => {
		const { getByText } = render(<ProductListScreen />);
		expect(typeof searchPlaceholderText).toBe('string');

		expect(searchPlaceholderText).toBeTruthy();
	});

	test('toggles language modal visibility on icon press', () => {
		const { getByTestId, queryByTestId } = render(<ProductListScreen />);
		const languageIcon = getByTestId('language-icon');

		fireEvent.press(languageIcon);

		const languageModal = getByTestId('language-modal');
		expect(languageModal).toBeTruthy();

		fireEvent.press(languageIcon);

		expect(queryByTestId('language-modal')).toBeNull();
	});

	test('searches for products correctly', () => {
		const { getByTestId } = render(<ProductListScreen />);
		const searchInput = getByTestId('search-input');

		fireEvent.changeText(searchInput, 'Test');

		expect(searchInput).toHaveProp('value', 'Test');
	});

});


