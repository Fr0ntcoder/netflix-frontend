import { FC } from 'react'

import Statistics from '@/components/screens/admin/statistics/Statistics'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import Meta from '@/components/ui/meta/Meta'

const Genres: FC = () => {
	return (
		<Meta title='Администратор - жанры'>
			<AdminNavigation />
			<Statistics />
		</Meta>
	)
}

export default Genres
