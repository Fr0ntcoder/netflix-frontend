import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import { AuthMenu } from '@/components/layout/navigation/auth-menu/AuthMenu'
import Menu from '@/components/layout/navigation/menu/Menu'
import { firstMenu } from '@/components/layout/navigation/menu/menu.data'
import PopularGenres from '@/components/layout/navigation/popular-genres/PopularGenres'
import Logo from '@/components/ui/logo/Logo'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo className={styles.logo} />
			<Menu title='Меню' items={firstMenu} className={styles.menu} />
			<PopularGenres />
			<AuthMenu />
		</nav>
	)
}

export default Navigation
