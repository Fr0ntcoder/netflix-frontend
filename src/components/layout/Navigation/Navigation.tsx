import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import Menu from '@/layout/Navigation/Menu/Menu'
import { firstMenu } from '@/layout/Navigation/Menu/menu.data'
import PopularGenres from '@/layout/Navigation/PopularGenres/PopularGenres'

import Logo from '@/ui/Logo/Logo'

import styles from './Navigation.module.scss'

const DynamicAuthMenu = dynamic(() => import('./AuthMenu/AuthMenu'), {
	ssr: false,
})

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo className={styles.logo} />
			<Menu title="Меню" items={firstMenu} className={styles.menu} />
			<PopularGenres />

			<DynamicAuthMenu />
		</nav>
	)
}

export default Navigation
