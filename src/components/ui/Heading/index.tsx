import cn from 'classnames'
import { FC, createElement } from 'react'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Heading.module.scss'

type THeading = {
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	title: string
}

const Heading: FC<IClass & THeading> = ({ className, variant, title }) => {
	return (
		<>
			{createElement(
				`${variant}`,
				{
					className: cn(styles.title, className, {
						[styles.h1]: variant === 'h1',
						[styles.h2]: variant === 'h2',
						[styles.h3]: variant === 'h3',
						[styles.h4]: variant === 'h4',
						[styles.h5]: variant === 'h5',
						[styles.h6]: variant === 'h6',
					}),
				},
				title
			)}
		</>
	)
}

export default Heading
