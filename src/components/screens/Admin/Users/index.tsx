import { FC } from 'react'

import AdminNavigation from '@/ui/Admin/AdminNavigation'
import AdminTable from '@/ui/Admin/AdminTable'
import SearchField from '@/ui/FormElements/SearchField'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

import { useUsersTable } from '@/hooks/users/useUsersTable'

import styles from './Users.module.scss'

const Users: FC = () => {
	const { data, isLoading, handleSearch, deleteAsync, searchTerm } =
		useUsersTable()
	return (
		<Meta title="Администратор - пользователи">
			<AdminNavigation />
			<Heading variant="h2" title="Пользователи" className={styles.title} />
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
			<AdminTable
				notFoundText="Пользователи не найдены"
				isLoading={isLoading}
				itemsHeader={['Email', 'Дата регистрации', 'Действия']}
				items={data || []}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default Users
