import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import AuthForm from '@/components/screens/auth/auth-form/AuthForm'
import Meta from '@/components/ui/meta/Meta'

import { useAuthRedirect } from '@/hooks/auth/useAuthRedirect'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	return (
		<Meta title='Авторизация'>
			<Layout>
				<div className={styles.auth}>
					<AuthForm />
				</div>
			</Layout>
		</Meta>
	)
}

export default Auth
