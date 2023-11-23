import { FC } from 'react'

import { clearText } from '@/utils/string/clear-text'

import styles from './AdminTableCol.module.scss'

type TAdminTableCol = {
	text: string
}

const AdminTableCol: FC<TAdminTableCol> = ({ text }) => {
	return <div className={styles.column}>{clearText(text)}</div>
}

export default AdminTableCol
