import Link from 'next/link'
import { FC } from 'react'

import { MovieUrl } from '@/shared/constants.enum'

import styles from './AuthButton.module.scss'

type TAuthButton = {
	slug: string
}
const AuthButton: FC<TAuthButton> = ({ slug }) => {
	return (
		<Link
			href={`/auth?redirect=${MovieUrl.ROOT}/${slug}`}
			className={styles.link}
		>
			Войти в систему
		</Link>
	)
}

export default AuthButton
