import cn from 'classnames'
import { FC } from 'react'

import MoviesList from '@/components/layout/sidebar/movies-list/MoviesList'
import MoviesLoader from '@/components/layout/sidebar/movies-loader/MoviesLoader'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'

import { useAuth } from '@/hooks/auth/useAuth'
import { useFavorites } from '@/hooks/users/user/useFavorites'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './FavoritesMovies.module.scss'

const FavoritesMovies: FC<IClass> = ({ className }) => {
	const { user } = useAuth()
	const { data: movies, isLoading, isError } = useFavorites()
	if (!user) {
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
			<MoviesList title="Избранные фильмы" movies={movies} link="/favorites" />
		</div>
	)
}

export default FavoritesMovies
