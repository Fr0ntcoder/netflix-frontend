import { FC } from 'react'

import StatisticsCountLoader from '@/components/screens/admin/statistics/statistics-count/statistics-count-loader/StatisticsCountLoader'
import Empty from '@/components/ui/empty/Empty'
import ErrorsLoader from '@/components/ui/errors/errors-loader/ErrorsLoader'

import { useUsers } from '@/hooks/users/useUsers'

import styles from './StatisticsCount.module.scss'

const StatisticsCount: FC = () => {
	const { data, isLoading, isError } = useUsers()

	if (isLoading) {
		return <StatisticsCountLoader />
	}

	if (isError) {
		return <ErrorsLoader />
	}

	if (data?.length === 0 || !data) {
		return <Empty />
	}

	console.log(data)
	return (
		<div className={styles.wrap}>
			<span className={styles.count}>{data.length}</span>
			<span className={styles.text}>пользователя</span>
		</div>
	)
}

export default StatisticsCount
