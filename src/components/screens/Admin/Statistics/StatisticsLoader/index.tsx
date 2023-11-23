import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import styles from './StatisticsLoader.module.scss'

const StatisticsLoader: FC = () => {
	return (
		<div className={styles.wrap}>
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Skeleton
					count={1}
					baseColor="#202020"
					highlightColor="#444"
					width={200}
					height={20}
					style={{ marginBottom: 10 }}
				/>
				<Skeleton
					count={1}
					baseColor="#202020"
					highlightColor="#444"
					width={100}
					height={16}
					style={{ marginTop: 15, marginBottom: 30 }}
				/>
				<Skeleton
					count={1}
					baseColor="#202020"
					highlightColor="#444"
					width={460}
					height={260}
					style={{ borderRadius: 20 }}
				/>
			</SkeletonTheme>
		</div>
	)
}

export default StatisticsLoader
