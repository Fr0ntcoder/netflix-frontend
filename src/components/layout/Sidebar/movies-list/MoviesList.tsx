import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import MoviesItem from '@/components/layout/sidebar/movies-list/movies-Item/MoviesItem'

/* import Button from '@/components/ui/button/Button' */
import Button from '@/components/ui/button/Button'

import styles from './MoviesList.module.scss'

type TMoviesList = {
	title: string
	movies: TMovie[]
}
const MoviesList: FC<TMoviesList> = ({ title, movies }) => {
	const list = movies.map(item => <MoviesItem item={item} key={item._id} />)
	return (
		<div className={styles.movies}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>{list}</ul>
			<Button variant='red'>Узнать больше</Button>
		</div>
	)
}
export default MoviesList
