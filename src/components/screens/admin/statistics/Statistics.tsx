import { FC } from 'react'

import StatisticsCount from '@/components/screens/admin/statistics/statistics-count/StatisticsCount'
import StatisticsMovie from '@/components/screens/admin/statistics/statistics-movie/StatisticsMovie'

import styles from './Statistics.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.wrap}>
			<StatisticsCount />
			<StatisticsMovie />
		</div>
	)
}

export default Statistics
