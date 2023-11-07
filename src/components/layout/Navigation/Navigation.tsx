import { FC } from 'react'

import { Auth } from '@/components/layout/Navigation/Auth/Auth'
import Menu from '@/components/layout/Navigation/Menu/Menu'
import { firstMenu } from '@/components/layout/Navigation/Menu/menu.data'
import Logo from '@/components/ui/logo/Logo'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo className={styles.logo} />
			<Menu title='Меню' items={firstMenu} className={styles.menu} />
			<Auth />
		</nav>
	)
}

export default Navigation
