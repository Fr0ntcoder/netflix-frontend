import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import { useAuth } from '@/hooks/auth/useAuth'
import { useActions } from '@/hooks/other/useActions'

import styles from './AuthMenu.module.scss'

const AuthMenu: FC = () => {
	const { user } = useAuth()
	const { logout } = useActions()
	const { pathname, push } = useRouter()
	const onHandler = () => {
		push('/')
		logout()
	}
	return (
		<div className={styles.auth}>
			<h3 className={styles.title}>Общие</h3>
			{!user ? (
				<Link href='/auth' className={styles.status}>
					<Icon name='MdExitToApp' />
					Войти
				</Link>
			) : (
				<div className={styles.wrap}>
					<Link
						href='/profile'
						className={cn(styles.status, {
							[styles.active]: pathname === '/profile'
						})}
					>
						<Icon name='MdAccountCircle' />
						Профиль
					</Link>
					<button className={styles.status} onClick={onHandler}>
						<Icon name='MdExitToApp' />
						Выйти
					</button>
					{user.isAdmin && (
						<Link
							href='/admin'
							className={cn(styles.status, {
								[styles.active]: pathname === '/admin'
							})}
						>
							<Icon name='MdLockOutline' />
							Админ панель
						</Link>
					)}
				</div>
			)}
		</div>
	)
}

export default AuthMenu
