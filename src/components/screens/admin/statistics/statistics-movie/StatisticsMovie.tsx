import Image from 'next/image'
import { FC } from 'react'

import StatisticsMovieLoader from '@/components/screens/admin/statistics/statistics-movie/statistics-movie-loader/StatisticsMovieLoader'
import Empty from '@/components/ui/empty/Empty'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'
import Heading from '@/components/ui/heading/Heading'

import { useMoviesPopular } from '@/hooks/movie/useMoviesPopular'

import { decOfNum } from '@/utils/decOfNum'

import styles from './StatisticsMovie.module.scss'

const StatisticsMovie: FC = () => {
	const { data, isLoading, isError } = useMoviesPopular(1)

	if (isLoading) {
		return <StatisticsMovieLoader />
	}

	if (isError) {
		return <ErrorsLoader />
	}

	if (!data) {
		return <Empty />
	}

	console.log(data)
	return (
		<div className={styles.wrap}>
			<Heading variant='h5' title='Популярные фильмы' />
			<span className={styles.count}>
				Открыли {data[0].countOpened}{' '}
				{decOfNum(data[0].countOpened, ['раз', 'раза', 'раз'])}
			</span>
			<div className={styles.image}>
				<Image
					src={data[0].bigPoster}
					layout='fill'
					objectFit='cover'
					objectPosition='left top'
					draggable={false}
					alt={data[0].title}
				/>
			</div>
		</div>
	)
}

export default StatisticsMovie
