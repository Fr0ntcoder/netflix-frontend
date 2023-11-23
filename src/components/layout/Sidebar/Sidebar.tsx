import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from '@/layout/Sidebar/PopularMovies/PopularMovies'
import Search from '@/layout/Sidebar/Search/Search'

import styles from './Sidebar.module.scss'

const FavoritesMovies = dynamic(
	() => import('./FavoritesMovies/FavoritesMovies'),
	{ ssr: false }
)
const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Search className={styles.search} />
			<PopularMovies className={styles.popular} />
			<FavoritesMovies className={styles.favorites} />
		</aside>
	)
}

export default Sidebar
