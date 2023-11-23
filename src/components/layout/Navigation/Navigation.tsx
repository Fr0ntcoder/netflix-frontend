import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import Menu from '@/layout/Navigation/Menu/Menu'
import { firstMenu } from '@/layout/Navigation/Menu/menu.data'
import PopularGenres from '@/layout/Navigation/PopularGenres/PopularGenres'

import HeaderLogo from '@/ui/Logo/HeaderLogo/HeaderLogo'

import styles from './Navigation.module.scss'

const DynamicAuthMenu = dynamic(() => import('./AuthMenu/AuthMenu'), {
	ssr: false,
})

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<HeaderLogo className={styles.logo} />
			<Menu title="Меню" items={firstMenu} className={styles.menu} />
			<PopularGenres />

			<DynamicAuthMenu />
		</nav>
	)
}

export default Navigation
