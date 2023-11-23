import { FC } from 'react'

import AdminTableRow from '@/ui/Admin/AdminTable/AdminTableRow/AdminTableRow'

import { TSearch } from '@/shared/types/search.types'

import styles from './AdminTableBody.module.scss'

type TAdminTableBody = {
	items: TSearch[]
	removeHandler: (_id: string) => void
}
const AdminTableBody: FC<TAdminTableBody> = ({ items, removeHandler }) => {
	const list = items.map((item) => (
		<AdminTableRow
			item={item}
			key={item._id}
			removeHandler={() => removeHandler(item._id)}
		/>
	))
	return <div className={styles.body}>{list}</div>
}

export default AdminTableBody
