import { FC } from 'react'

import StatisticsCount from '@/components/screens/admin/statistics/statistics-count/StatisticsCount'
import StatisticsMovie from '@/components/screens/admin/statistics/statistics-movie/StatisticsMovie'
import Heading from '@/components/ui/heading/Heading'

import styles from './Statistics.module.scss'

const Statistics: FC = ({ ...props }) => {
	return (
		<div className={styles.container} {...props}>
			<Heading variant='h2' title='Статистика' className={styles.title} />
			<div className={styles.wrap}>
				<StatisticsCount />
				<StatisticsMovie />
			</div>
		</div>
	)
}

export default Statistics
