import { FC } from 'react'

import AdminTableActions from '@/components/ui/admin/admin-table/admin-table-actions/AdminTableActions'
import AdminTableCol from '@/components/ui/admin/admin-table/admin-table-row/admin-table-col/AdminTableCol'

import { TSearch } from '@/shared/types/search.types'

import styles from './AdminTableRow.module.scss'

type TAdminTableRow = {
	item: TSearch
}
const AdminTableRow: FC<TAdminTableRow> = ({ item }) => {
	const list = item.items.map(el => <AdminTableCol text={el} key={el} />)
	return (
		<div className={styles.row}>
			{list}
			<AdminTableActions id={item._id} link={item.link} />
		</div>
	)
}

export default AdminTableRow
