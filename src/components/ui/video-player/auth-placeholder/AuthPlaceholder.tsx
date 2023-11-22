import { FC } from 'react'

import AuthButton from '@/components/ui/video-player/auth-button/AuthButton'

import styles from './AuthPlaceholder.module.scss'

type TAuthPlaceholder = {
	slug: string
}
const AuthPlaceholder: FC<TAuthPlaceholder> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div className={styles.text}>
				Ты должен войти в систему,чтобы продолжить просмотр
			</div>
			<AuthButton slug={slug} />
		</div>
	)
}

export default AuthPlaceholder
