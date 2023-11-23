import cn from 'classnames'
import { FC } from 'react'

import AdminTableCol from '@/ui/Admin/AdminTable/AdminTableRow/AdminTableCol/AdminTableCol'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './AdminTableHeader.module.scss'

type TAdminTableHeader = {
	items: string[]
}
const AdminTableHeader: FC<TAdminTableHeader & IClass> = ({
	items,
	className,
}) => {
	const list = items.map((item) => <AdminTableCol text={item} key={item} />)
	return <div className={cn(styles.header, className)}>{list}</div>
}

export default AdminTableHeader
