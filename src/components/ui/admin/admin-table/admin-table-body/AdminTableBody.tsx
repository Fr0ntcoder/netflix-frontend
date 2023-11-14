import { FC } from 'react'

import AdminTableRow from '@/components/ui/admin/admin-table/admin-table-row/AdminTableRow'

import { TTableItem } from '@/shared/types/table.types'

import styles from './AdminTableBody.module.scss'

type TAdminTableBody = {
	items: TTableItem[]
}
const AdminTableBody: FC<TAdminTableBody> = ({ items }) => {
	const list = items.map(item => <AdminTableRow item={item} />)
	return <div className={styles.body}>{list}</div>
}

export default AdminTableBody
