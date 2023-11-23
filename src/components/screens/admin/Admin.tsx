import { FC } from 'react'

import Statistics from '@/screens/Admin/Statistics/Statistics'

import AdminNavigation from '@/ui/Admin/AdminNavigation/AdminNavigation'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Admin.module.scss'

const Admin: FC<IClass> = () => {
	return (
		<Meta title="Администратор - статистика">
			<AdminNavigation />
			<Heading variant="h2" title="Статистика" className={styles.title} />
			<Statistics />
		</Meta>
	)
}

export default Admin
