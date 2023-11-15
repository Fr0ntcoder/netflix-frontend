import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import Menu from '@/components/layout/navigation/menu/Menu'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'

import { useGenres } from '@/hooks/genre/useGenres'

import styles from './PopularGenres.module.scss'

const PopularGenres: FC = () => {
	const { data, isLoading, isError } = useGenres()
	const modifData = data
		?.map(item => ({
			name: item.name,
			icon: item.icon,
			text: item.name,
			link: item.slug
		}))
		.slice(0, 4)

	if (isLoading) {
		return (
			<Skeleton
				count={5}
				baseColor='#202020'
				highlightColor='#444'
				className={styles.loader__link}
				containerClassName={styles.loader}
			/>
		)
	}

	if (!data || isError) return <ErrorsLoader />

	return (
		<Menu
			title='Популярные жанры'
			items={modifData || []}
			className={styles.menu}
		/>
	)
}

export default PopularGenres
