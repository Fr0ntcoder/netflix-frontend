import Link from 'next/link'
import { FC } from 'react'

import Icon from '@/ui/Icon'

import styles from './AdminTableActions.module.scss'

type TAdminTableActions = {
	link: string
	removeHandler: () => void
}

const AdminTableActions: FC<TAdminTableActions> = ({ link, removeHandler }) => {
	return (
		<div className={styles.actions}>
			<Link href={link} className={styles.btn}>
				<Icon name="MdCreate" />
			</Link>
			<button className={styles.btn} onClick={removeHandler}>
				<Icon name="MdOutlineClose" />
			</button>
		</div>
	)
}

export default AdminTableActions
