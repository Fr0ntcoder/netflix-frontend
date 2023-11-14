import { FC } from 'react'

import { AdminDataNav } from '@/components/ui/admin-navigation/admin-nav.data'
import AdminNavigationItem from '@/components/ui/admin-navigation/admin-navigation-item/AdminNavigationItem'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	const list = AdminDataNav.map(item => (
		<AdminNavigationItem key={item.id} item={item} />
	))
	return (
		<div className={styles.wrap}>
			<div className={styles.list}>{list}</div>
		</div>
	)
}

export default AdminNavigation
