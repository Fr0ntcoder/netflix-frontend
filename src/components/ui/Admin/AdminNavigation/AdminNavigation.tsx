import { FC } from 'react'

import AdminNavigationItem from '@/ui/Admin/AdminNavigation/AdminNavigationItem/AdminNavigationItem'
import { AdminDataNav } from '@/ui/Admin/AdminNavigation/admin-nav.data'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	const list = AdminDataNav.map((item) => (
		<AdminNavigationItem key={item.id} item={item} />
	))
	return (
		<div className={styles.wrap}>
			<div className={styles.list}>{list}</div>
		</div>
	)
}

export default AdminNavigation
