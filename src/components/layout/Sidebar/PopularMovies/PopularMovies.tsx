import clsx from 'clsx'
import { FC } from 'react'

import MoviesList from '@/components/layout/Sidebar/MoviesList/MoviesList'
import MoviesLoader from '@/components/layout/Sidebar/MoviesLoader/MoviesLoader'
import ErrorsLoader from '@/components/ui/errors/ErrorsLoader/ErrorsLoader'

import { useMoviesPopular } from '@/hooks/movie/useMoviesPopular'

import styles from './PopularMovies.module.scss'

type TPopularMovies = {
	className?: string
}
const PopularMovies: FC<TPopularMovies> = ({ className }) => {
	const { data: movies, isLoading, isError } = useMoviesPopular()

	if (isLoading) {
		return <MoviesLoader movies={movies} />
	}

	if (!movies || isError) return <ErrorsLoader />

	return (
		<div className={clsx(styles.popular, className)}>
			<MoviesList title='Популярные фильмы' movies={movies} />
		</div>
	)
}

export default PopularMovies
