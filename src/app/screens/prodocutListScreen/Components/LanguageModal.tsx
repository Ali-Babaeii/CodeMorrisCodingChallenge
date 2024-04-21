import React from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface LanguageModalProps {
	isVisible: boolean
	onClose: () => void
	onChangeLanguage: (language: string) => void
}

const LanguageModal: React.FC<LanguageModalProps> = ({ isVisible, onClose, onChangeLanguage }) => {
	const { t } = useTranslation()

	return (
		<Modal visible={isVisible} animationType="slide" transparent>
			<View style={{ justifyContent: 'center', flex: 1 }}>
				<View style={styles.modalContainer}>
					<View>
						<TouchableOpacity style={styles.enButton} onPress={() => onChangeLanguage('en')}>
							<Text style={styles.lngText}>{t('english')}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.deButton} onPress={() => onChangeLanguage('de')}>
							<Text style={styles.lngText}>{t('german')}</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity style={styles.cancelButton} onPress={onClose}>
							<Text style={styles.lngText}>{t('cancel')}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default LanguageModal
