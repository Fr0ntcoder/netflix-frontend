import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { TAdminNavItem } from '@/ui/Admin/AdminNavigation/admin.nav.types'

import styles from './AdminNavigationItem.module.scss'

const AdminNavigationItem: FC<{ item: TAdminNavItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<Link
			href={item.link}
			className={cn(styles.item, {
				[styles.active]: item.link === asPath || item.link === asPath,
			})}
		>
			{item.text}
		</Link>
	)
}

export default AdminNavigationItem
