import cn from 'classnames'
import { FC, useState } from 'react'

import MoviesList from '@/components/layout/sidebar/movies-list/MoviesList'
import MoviesLoader from '@/components/layout/sidebar/movies-loader/MoviesLoader'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'

import { useMoviesPopular } from '@/hooks/movie/useMoviesPopular'

import styles from './FavoritesMovies.module.scss'

type TFavoritesMovies = {
	className?: string
}
const FavoritesMovies: FC<TFavoritesMovies> = ({ className }) => {
	const [isAuth, setIsAuth] = useState(false)
	const { data: movies, isLoading, isError } = useMoviesPopular()

	if (!isAuth) {
		return (
			<div className={styles.empty}>
				Для просмотра избранных фильмов,вы должны авторизоваться
			</div>
		)
	}

	if (isLoading) {
		return <MoviesLoader movies={movies} />
	}

	if (!movies || isError) return <ErrorsLoader />

	return (
		<div className={cn(styles.favorites, className)}>
			<MoviesList title='Избранные фильмы' movies={movies} />
		</div>
	)
}

export default FavoritesMovies
