import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Auth } from '@/components/layout/Navigation/Auth/Auth'
import Menu from '@/components/layout/Navigation/Menu/Menu'
import { firstMenu } from '@/components/layout/Navigation/Menu/menu.data'
import Logo from '@/components/ui/logo/Logo'

import { useGenreMenu } from '@/hooks/genre/useGenreMenu'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	const { data, isLoading } = useGenreMenu()

	return (
		<nav className={styles.navigation}>
			<Logo className={styles.logo} />
			<Menu title='Меню' items={firstMenu} className={styles.menu} />
			{isLoading ? (
				<Skeleton
					count={5}
					baseColor='#202020'
					highlightColor='#444'
					className={styles.loader__link}
					containerClassName={styles.loader}
				/>
			) : (
				data && (
					<Menu title='Популярные жанры' items={data} className={styles.menu} />
				)
			)}
			<Auth />
		</nav>
	)
}

export default Navigation
