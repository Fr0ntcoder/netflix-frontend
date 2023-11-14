import { FC } from 'react'

import Statistics from '@/components/screens/admin/statistics/Statistics'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Meta from '@/components/ui/meta/Meta'

const Actors: FC = () => {
	return (
		<Meta title='Администратор - актёры'>
			<AdminNavigation />
			<Statistics />
		</Meta>
	)
}

export default Actors
