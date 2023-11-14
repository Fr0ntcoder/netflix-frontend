import { FC } from 'react'

import Statistics from '@/components/screens/admin/statistics/Statistics'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Meta from '@/components/ui/meta/Meta'

const Movies: FC = () => {
	return (
		<Meta title='Администратор - фильмы'>
			<AdminNavigation />
			<Statistics />
		</Meta>
	)
}

export default Movies
