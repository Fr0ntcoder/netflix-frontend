import { FC } from 'react'

import StatisticsCount from '@/screens/Admin/Statistics/StatisticsCount/StatisticsCount'
import StatisticsMovie from '@/screens/Admin/Statistics/StatisticsMovie/StatisticsMovie'

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
