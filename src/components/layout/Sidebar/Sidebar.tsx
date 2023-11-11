import { FC } from 'react'

import FavoritesMovies from '@/components/layout/sidebar/favorites-movies/FavoritesMovies'
import PopularMovies from '@/components/layout/sidebar/popular-movies/PopularMovies'
import Search from '@/components/layout/sidebar/search/Search'

import styles from './Sidebar.module.scss'

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
