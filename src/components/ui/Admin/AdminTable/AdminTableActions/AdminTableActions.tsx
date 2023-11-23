import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import styles from './AdminTableActions.module.scss'

type TAdminTableActions = {
	link: string
	removeHandler: () => void
}

const AdminTableActions: FC<TAdminTableActions> = ({ link, removeHandler }) => {
	return (
		<div className={styles.actions}>
			<Link href={link} className={styles.btn}>
				<MaterialIcon name="MdCreate" />
			</Link>
			<button className={styles.btn} onClick={removeHandler}>
				<MaterialIcon name="MdOutlineClose" />
			</button>
		</div>
	)
}

export default AdminTableActions
