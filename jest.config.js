module.exports = {
	preset: 'react-native',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'\\.(js|jsx)?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupFiles: ['<rootDir>/jest.setup.js'],
	testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-native|@react-native-community|@react-navigation)'],
	globals: {
		'ts-jest': {
			babelConfig: true,
			tsconfig: 'tsconfig.jest.json',
		},
	},
};
