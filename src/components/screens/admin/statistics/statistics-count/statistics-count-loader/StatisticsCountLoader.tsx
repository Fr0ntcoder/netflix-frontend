import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import styles from './StatisticsCountLoader.module.scss'

const StatisticsCountLoader: FC = () => {
	return (
		<div className={styles.wrap}>
			<SkeletonTheme baseColor='#202020' highlightColor='#444'>
				<Skeleton
					count={1}
					baseColor='#202020'
					highlightColor='#444'
					width={60}
					height={80}
					style={{ marginBottom: 10 }}
				/>
				<Skeleton
					count={1}
					baseColor='#202020'
					highlightColor='#444'
					width={200}
					height={25}
				/>
			</SkeletonTheme>
		</div>
	)
}

export default StatisticsCountLoader
