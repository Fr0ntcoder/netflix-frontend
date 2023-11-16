import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import Menu from '@/components/layout/navigation/menu/Menu'
import { firstMenu } from '@/components/layout/navigation/menu/menu.data'
import PopularGenres from '@/components/layout/navigation/popular-genres/PopularGenres'
import Logo from '@/components/ui/logo/Logo'

import styles from './Navigation.module.scss'

const DynamicAuthMenu = dynamic(() => import('./auth-menu/AuthMenu'), {
	ssr: false
})

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo className={styles.logo} />
			<Menu title='Меню' items={firstMenu} className={styles.menu} />
			<PopularGenres />
			<DynamicAuthMenu />
		</nav>
	)
}

export default Navigation
