import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { TAdminNavItem } from '@/components/ui/admin/admin-navigation/admin.nav.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import styles from './AdminNavigationItem.module.scss'

const AdminNavigationItem: FC<{ item: TAdminNavItem }> = ({ item }) => {
	const { asPath } = useRouter()
	const url = `${EnumContstantsUrl.ADMIN}${item.link}`
	const result = asPath === '' ? item.link : url

	return (
		<Link
			href={url}
			className={cn(styles.item, {
				[styles.active]: item.link === asPath || result === asPath
			})}
		>
			{item.text}
		</Link>
	)
}

export default AdminNavigationItem
