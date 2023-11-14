import { FC } from 'react'

import AdminTableActions from '@/components/ui/admin/admin-table/admin-table-actions/AdminTableActions'
import AdminTableCol from '@/components/ui/admin/admin-table/admin-table-row/admin-table-col/AdminTableCol'

import { TTableItem } from '@/shared/types/table.types'

import styles from './AdminTableRow.module.scss'

type TAdminTableRow = {
	item: TTableItem
}
const AdminTableRow: FC<TAdminTableRow> = ({ item }) => {
	const list = item.items.map(el => <AdminTableCol text={el} />)
	return (
		<div className={styles.row}>
			{list}
			<AdminTableActions id={item._id} />
		</div>
	)
}

export default AdminTableRow
