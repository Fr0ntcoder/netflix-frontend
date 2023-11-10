import Image from 'next/image'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Button from '@/components/ui/button/Button'
import Icon from '@/components/ui/icon/Icon'

import styles from './MoviesList.module.scss'

type TMoviesList = {
	title: string
	movies: TMovie[]
}
const MoviesList: FC<TMoviesList> = ({ title, movies }) => {
	const list = movies.map(item => (
		<div className={styles.item} key={item._id}>
			<Image src={item.poster} alt={item.title} width={80} height={90} />
			<div className={styles.item__content}>
				<h4 className={styles.item__name}>{item.title}</h4>
				<div className={styles.item__genre}>
					{item.genres.map(genre => (
						<span className={styles.text} key={genre._id}>
							{item.genres.length > 1 ? `${genre.name}, ` : `${genre.name}`}
						</span>
					))}
				</div>
				<div className={styles.item__rating}>
					<Icon name='MdStar' />
					<span>{item.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	))
	return (
		<div className={styles.movies}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>{list}</ul>
			<Button variant='red'>Узнать больше</Button>
		</div>
	)
}
export default MoviesList
