import { FC } from 'react'

import AdminTableRow from '@/components/ui/admin/admin-table/admin-table-row/AdminTableRow'

import { TSearch } from '@/shared/types/search.types'

import styles from './AdminTableBody.module.scss'

type TAdminTableBody = {
	items: TSearch[]
}
const AdminTableBody: FC<TAdminTableBody> = ({ items }) => {
	const list = items.map(item => <AdminTableRow item={item} key={item._id} />)
	return <div className={styles.body}>{list}</div>
}

export default AdminTableBody
