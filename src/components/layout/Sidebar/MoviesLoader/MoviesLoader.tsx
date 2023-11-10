import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { TMovie } from 'service/movie/movie.types'

import styles from './MoviesLoader.module.scss'

type TMoviesLoader = {
	movies?: TMovie[]
}
const MoviesLoader: FC<TMoviesLoader> = ({ movies }) => {
	const length = movies ? movies.length : 1

	const list = new Array(length).fill(length).map((_, index) => (
		<SkeletonTheme baseColor='#202020' highlightColor='#444' key={index}>
			<div className={styles.item}>
				<div className={styles.item__img}>
					<Skeleton
						count={1}
						baseColor='#202020'
						highlightColor='#444'
						width='100%'
						height='100%'
					/>
				</div>
				<div className={styles.item__content}>
					<Skeleton
						count={1}
						baseColor='#202020'
						highlightColor='#444'
						containerClassName={styles.item__name}
					/>
					<Skeleton
						count={1}
						baseColor='#202020'
						highlightColor='#444'
						containerClassName={styles.item__genres}
					/>
					<Skeleton
						count={1}
						baseColor='#202020'
						highlightColor='#444'
						containerClassName={styles.item__rating}
					/>
				</div>
			</div>
		</SkeletonTheme>
	))

	return (
		<div className={styles.loader}>
			<Skeleton
				count={1}
				baseColor='#202020'
				highlightColor='#444'
				width='100%'
				height={18}
				style={{ marginBottom: 30 }}
			/>
			<div className={styles.list}>{list}</div>
			<Skeleton
				count={1}
				baseColor='#202020'
				highlightColor='#444'
				width='100%'
				height={40}
				style={{ marginTop: 15 }}
			/>
		</div>
	)
}

export default MoviesLoader
