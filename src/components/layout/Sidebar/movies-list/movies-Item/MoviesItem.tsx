import Image from 'next/image'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Icon from '@/components/ui/icon/Icon'

import styles from './MoviesItem.module.scss'

type TMoviesItem = {
	item: TMovie
}
const MoviesItem: FC<TMoviesItem> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image src={item.poster} alt={item.title} width={80} height={100} />
			<div className={styles.content}>
				<h4 className={styles.name}>{item.title}</h4>
				<div className={styles.genre}>
					{item.genres.map((genre) => (
						<span className={styles.text} key={genre._id}>
							{item.genres.length > 1 ? `${genre.name}, ` : `${genre.name}`}
						</span>
					))}
				</div>
				<div className={styles.rating}>
					<Icon name="MdStar" />
					<span>{item.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MoviesItem
