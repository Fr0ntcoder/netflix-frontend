import { FC } from 'react'

import StatisticsCountLoader from '@/screens/Admin/Statistics/StatisticsCount/StatisticsCountLoader'

import ErrorsLoader from '@/ui/Errors/ErrorLoader'
import NotFound from '@/ui/NotFound'

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
					'пользователей',
				])}
			</span>
		</div>
	)
}

export default StatisticsCount
