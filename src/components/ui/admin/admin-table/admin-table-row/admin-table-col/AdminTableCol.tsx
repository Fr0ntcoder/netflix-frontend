import { FC } from 'react'

import styles from './AdminTableCol.module.scss'

type TAdminTableCol = {
	text: string
}

const AdminTableCol: FC<TAdminTableCol> = ({ text }) => {
	return <div className={styles.column}>{text}</div>
}

export default AdminTableCol
