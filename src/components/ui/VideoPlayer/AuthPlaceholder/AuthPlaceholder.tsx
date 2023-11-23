import { FC } from 'react'

import AuthButton from '@/ui/VideoPlayer/AuthButton/AuthButton'
import Heading from '@/ui/heading/Heading'

import styles from './AuthPlaceholder.module.scss'

type TAuthPlaceholder = {
	slug: string
}
const AuthPlaceholder: FC<TAuthPlaceholder> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<Heading
				title="Вы должны войти в систему,чтобы продолжить просмотр"
				variant="h6"
				className={styles.title}
			/>

			<AuthButton slug={slug} />
		</div>
	)
}

export default AuthPlaceholder
