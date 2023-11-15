import Link from 'next/link'
import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import { useUsers } from '@/hooks/users/useUsers'

import styles from './AdminTableActions.module.scss'

type TAdminTableActions = {
	id: string
	link: string
}

const AdminTableActions: FC<TAdminTableActions> = ({ id, link }) => {
	const { deleteAsync } = useUsers()
	return (
		<div className={styles.actions}>
			<Link href={link} className={styles.btn}>
				<Icon name='MdCreate' />
			</Link>
			<button className={styles.btn} onClick={() => deleteAsync(id)}>
				<Icon name='MdOutlineClose' />
			</button>
		</div>
	)
}

export default AdminTableActions
