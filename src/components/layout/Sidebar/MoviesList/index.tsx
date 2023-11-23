import Link from 'next/link'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import MoviesItem from '@/layout/Sidebar/MoviesList/MoviesItem'

import NotFound from '@/ui/NotFound'

import styles from './MoviesList.module.scss'

type TMoviesList = {
	title: string
	movies: TMovie[]
	link: string
}
const MoviesList: FC<TMoviesList> = ({ title, movies, link }) => {
	const list = movies.map((item) => <MoviesItem item={item} key={item._id} />)
	return (
		<div className={styles.movies}>
			<h3 className={styles.title}>{title}</h3>
			{movies.length === 0 ? (
				<NotFound text="Фильмы не найдены" />
			) : (
				<>
					<ul className={styles.list}>{list}</ul>
					<Link href={link} className={styles.link}>
						Узнать больше
					</Link>
				</>
			)}
		</div>
	)
}
export default MoviesList
