import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import { TypeMaterialIcon } from '@/shared/icons/icon.type'

import styles from './MenuItem.module.scss'

export type TMenuItem = {
	name: string
	icon: TypeMaterialIcon
	link: string
}

const MenuItem: FC<{ item: TMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li className={styles.item}>
			<Link
				href={item.link}
				className={cn(styles.link, {
					[styles.active]: asPath === item.link,
				})}
			>
				<MaterialIcon name={item.icon} />
				<span className={styles.text}>{item.name}</span>
			</Link>
		</li>
	)
}

export default MenuItem
