import { FC } from 'react'

import AdminTableBody from '@/components/ui/admin/admin-table/admin-table-body/AdminTableBody'
import AdminTableHeader from '@/components/ui/admin/admin-table/admin-table-header/AdminTableHeader'

import { TTableItem } from '@/shared/types/table.types'

import styles from './AdminTable.module.scss'

type TAdminTable = {
	itemsHeader: string[]
	items: TTableItem[]
}
const AdminTable: FC<TAdminTable> = ({ itemsHeader, items }) => {
	return (
		<div className={styles.table}>
			<AdminTableHeader items={itemsHeader} className={styles.header} />
			{items.length !== 0 ? (
				<AdminTableBody items={items} />
			) : (
				<span className={styles.empty}>Пользователи не найдены</span>
			)}
		</div>
	)
}

export default AdminTable
