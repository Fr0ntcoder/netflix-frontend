import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import MainMenu from '@/layout/Navigation/MainMenu'
import { firstMenu } from '@/layout/Navigation/MainMenu/menu.data'
import PopularGenres from '@/layout/Navigation/PopularGenres'

import Logo from '@/ui/Logo'

import styles from './Navigation.module.scss'

const DynamicAuthMenu = dynamic(() => import('./AuthMenu'), {
	ssr: false,
})

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo className={styles.logo} />
			<MainMenu title="Меню" items={firstMenu} className={styles.menu} />
			<PopularGenres />

			<DynamicAuthMenu />
		</nav>
	)
}

export default Navigation
