import { FC } from 'react'

import AuthForm from '@/components/screens/auth/auth-form/AuthForm'
import Meta from '@/components/ui/meta/Meta'

import { useAuthRedirect } from '@/hooks/auth/useAuthRedirect'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	return (
		<Meta title='Авторизация'>
			<div className={styles.auth}>
				<AuthForm />
			</div>
		</Meta>
	)
}

export default Auth
