import { FC } from 'react'

import StatisticsCountLoader from '@/components/screens/admin/statistics/statistics-count/statistics-count-loader/StatisticsCountLoader'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'
import NotFound from '@/components/ui/not-found/NotFound'

import { useUsersTable } from '@/hooks/users/useUsersTable'

import { decOfNum } from '@/utils/decOfNum'

import styles from './StatisticsCount.module.scss'

const StatisticsCount: FC = () => {
	const { data, isLoading, isError } = useUsersTable()

	if (isLoading) {
		return <StatisticsCountLoader />
	}

	if (isError) {
		return <ErrorsLoader />
	}

	if (data?.length === 0 || !data) {
		return <NotFound text="Пользователи не найдены" />
	}
	return (
		<div className={styles.wrap}>
			<span className={styles.count}>{data.length}</span>
			<span className={styles.text}>
				{decOfNum(data.length, [
					'пользователь',
					'пользователя',
					'пользователи',
				])}
			</span>
		</div>
	)
}

export default StatisticsCount
