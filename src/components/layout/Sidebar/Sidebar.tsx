import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from '@/components/layout/sidebar/popular-movies/PopularMovies'
import Search from '@/components/layout/sidebar/search/Search'

import styles from './Sidebar.module.scss'

const FavoritesMovies = dynamic(
	() => import('@/components/layout/sidebar/favorites-movies/FavoritesMovies'),
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