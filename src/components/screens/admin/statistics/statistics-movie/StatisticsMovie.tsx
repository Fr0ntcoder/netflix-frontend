import Image from 'next/image'
import { FC } from 'react'

import StatisticsLoader from '@/components/screens/admin/statistics/statistics-loader/StatisticsLoader'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'
import Heading from '@/components/ui/heading/Heading'
import NotFound from '@/components/ui/not-found/NotFound'

import { useMoviesPopular } from '@/hooks/movies/useMoviesPopular'

import { decOfNum } from '@/utils/decOfNum'

import styles from './StatisticsMovie.module.scss'

const StatisticsMovie: FC = () => {
	const { data, isLoading, isError } = useMoviesPopular(1)

	if (isLoading) {
		return <StatisticsLoader />
	}

	if (isError) {
		return <ErrorsLoader />
	}

	if (!data) {
		return <NotFound text="Пусто" />
	}

	return (
		<div className={styles.wrap}>
			<Heading variant="h5" title="Популярные фильмы" />
			<span className={styles.count}>
				Открыли {data[0].countOpened}
				{decOfNum(data[0].countOpened, ['раз', 'раза', 'раз'])}
			</span>
			<div className={styles.image}>
				<Image
					src={data[0].bigPoster}
					fill={true}
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
					priority={true}
					draggable={false}
					alt={data[0].title}
				/>
			</div>
		</div>
	)
}

export default StatisticsMovie
