import { FC } from 'react'

import Statistics from '@/components/screens/admin/statistics/Statistics'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Meta from '@/components/ui/meta/Meta'

import { IClass } from '@/shared/interface/classname.interface'

const Admin: FC<IClass> = () => {
	return (
		<Meta title='Администратор - статистика'>
			<AdminNavigation />
			<Statistics />
		</Meta>
	)
}

export default Admin
