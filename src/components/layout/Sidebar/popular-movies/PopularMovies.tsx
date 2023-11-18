import cn from 'classnames'
import { FC } from 'react'

import MoviesList from '@/components/layout/sidebar/movies-list/MoviesList'
import MoviesLoader from '@/components/layout/sidebar/movies-loader/MoviesLoader'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'

import { useMoviesPopular } from '@/hooks/movies/useMoviesPopular'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './PopularMovies.module.scss'

const PopularMovies: FC<IClass> = ({ className }) => {
	const { data: movies, isLoading, isError } = useMoviesPopular(4)

	if (isLoading) {
		return <MoviesLoader movies={movies} />
	}

	if (!movies || isError) return <ErrorsLoader />

	return (
		<div className={cn(styles.popular, className)}>
			<MoviesList title='Популярные фильмы' movies={movies} />
		</div>
	)
}

export default PopularMovies
