import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Logo.module.scss'

const Logo: FC<IClass> = ({ className }) => {
	return (
		<Link href="/" className={cn(styles.logo, className)}>
			<MaterialIcon name="MdMovieCreation" />
			<span className={styles.text}>
				Netflix
				<span>.</span>
				ru
			</span>
		</Link>
	)
}

export default Logo
