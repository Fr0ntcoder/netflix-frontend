import cn from 'classnames'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Banner.module.scss'

type TBanner = {
	image: string
	children: ReactNode
} & IClass

const Banner: FC<TBanner> = ({ image, children, className }) => {
	return (
		<div className={cn(styles.banner, className)}>
			<Image
				src={image}
				fill={true}
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
				priority={true}
				draggable={false}
				alt=""
			/>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default Banner
