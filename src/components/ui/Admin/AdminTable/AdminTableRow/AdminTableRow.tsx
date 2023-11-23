import { FC } from 'react'

import AdminTableActions from '@/ui/Admin/AdminTable/AdminTableActions/AdminTableActions'
import AdminTableCol from '@/ui/Admin/AdminTable/AdminTableRow/AdminTableCol/AdminTableCol'

import { TSearch } from '@/shared/types/search.types'

import styles from './AdminTableRow.module.scss'

type TAdminTableRow = {
	item: TSearch
	removeHandler: () => void
}
const AdminTableRow: FC<TAdminTableRow> = ({ item, removeHandler }) => {
	const list = item.items.map((el) => <AdminTableCol text={el} key={el} />)
	return (
		<div className={styles.row}>
			{list}
			<AdminTableActions removeHandler={removeHandler} link={item.link} />
		</div>
	)
}

export default AdminTableRow
