import { FC } from 'react'

import FavoritesMovies from '@/components/layout/Sidebar/FavoritesMovies/FavoritesMovies'
import PopularMovies from '@/components/layout/Sidebar/PopularMovies/PopularMovies'
import Search from '@/components/layout/Sidebar/Search/Search'

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
