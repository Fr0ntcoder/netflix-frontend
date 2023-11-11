import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import styles from './Logo.module.scss'

type TLogo = {
	className?: string
}
const Logo: FC<TLogo> = ({ className }) => {
	return (
		<Link href='/' className={cn(styles.logo, className)}>
			<Icon name='MdMovieCreation' />
			<span className={styles.text}>
				Netflix
				<span>.</span>
				ru
			</span>
		</Link>
	)
}

export default Logo
