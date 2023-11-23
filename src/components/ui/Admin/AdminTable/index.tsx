import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import AdminTableBody from '@/ui/Admin/AdminTable/AdminTableBody'
import AdminTableHeader from '@/ui/Admin/AdminTable/AdminTableHeader'

import { TSearch } from '@/shared/types/search.types'

import styles from './AdminTable.module.scss'

type TAdminTable = {
	itemsHeader: string[]
	items: TSearch[]
	isLoading: boolean
	notFoundText: string
	removeHandler: (_id: string) => void
}
const AdminTable: FC<TAdminTable> = ({
	itemsHeader,
	items,
	isLoading,
	notFoundText,
	removeHandler,
}) => {
	return (
		<div className={styles.table}>
			<AdminTableHeader items={itemsHeader} className={styles.header} />
			{isLoading ? (
				<Skeleton
					count={1}
					baseColor="#202020"
					highlightColor="#444"
					width="100%"
					height={64}
				/>
			) : items.length !== 0 ? (
				<AdminTableBody removeHandler={removeHandler} items={items} />
			) : (
				<span className={styles.empty}>{notFoundText}</span>
			)}
		</div>
	)
}

export default AdminTable
