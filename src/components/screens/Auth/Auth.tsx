import { FC } from 'react'

import AuthForm from '@/screens/Auth/AuthForm/AuthForm'

import Meta from '@/ui/Meta/Meta'

import { useAuthRedirect } from '@/hooks/auth/useAuthRedirect'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	return (
		<Meta title="Авторизация">
			<div className={styles.auth}>
				<AuthForm />
				<div className={styles.data}>
					<span>Вход для администатора(для тестирования)</span>
					<span>Email: admin@admin.ru</span>
					<span>Пароль: 000000</span>
				</div>
			</div>
		</Meta>
	)
}

export default Auth
