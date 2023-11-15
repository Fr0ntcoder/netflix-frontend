import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import { TypeMaterialIcon } from '@/shared/icons/icon.type'

import styles from './MenuItem.module.scss'

export type TMenuItem = {
	name: string
	icon: TypeMaterialIcon
	text: string
	link: string
}

const MenuItem: FC<{ item: TMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li className={styles.item}>
			<Link
				href={item.link}
				className={cn(styles.link, {
					[styles.active]: asPath === item.link
				})}
			>
				<Icon name={item.icon} />
				<span className={styles.text}>{item.text}</span>
			</Link>
		</li>
	)
}

export default MenuItem
