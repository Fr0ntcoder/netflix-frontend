import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import ErrorsLoader from '@/ui/Errors/ErrorLoader/ErrorsLoader'

import { useGenresPopular } from '@/hooks/genres/useGenresPopular'

import Menu from '../Menu/Menu'

import styles from './PopularGenres.module.scss'

const PopularGenres: FC = () => {
	const { data, isLoading, isError } = useGenresPopular()

	if (isLoading) {
		return (
			<Skeleton
				count={5}
				baseColor="#202020"
				highlightColor="#444"
				className={styles.loader__link}
				containerClassName={styles.loader}
			/>
		)
	}

	if (!data || isError) return <ErrorsLoader />

	return (
		<Menu title="Популярные жанры" items={data || []} className={styles.menu} />
	)
}

export default PopularGenres
