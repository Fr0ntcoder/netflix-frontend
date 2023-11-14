import { FC } from 'react'

import Statistics from '@/components/screens/admin/statistics/Statistics'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Admin.module.scss'

const Admin: FC<IClass> = () => {
	return (
		<Meta title='Администратор - статистика'>
			<AdminNavigation />
			<Heading variant='h2' title='Статистика' className={styles.title} />
			<Statistics />
		</Meta>
	)
}

export default Admin
