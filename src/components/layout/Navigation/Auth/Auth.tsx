import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import styles from './Auth.module.scss'

export const Auth: FC = () => {
	return (
		<div className={styles.auth}>
			<h3 className={styles.title}>Общие</h3>
			<div className={styles.status}>
				<Icon name='MdExitToApp' />
				Войти
			</div>
		</div>
	)
}
