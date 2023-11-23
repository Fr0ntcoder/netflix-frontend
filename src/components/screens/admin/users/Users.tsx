import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import SearchField from '@/components/ui/form-elements/search-field/SearchField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useUsersTable } from '@/hooks/users/useUsersTable'

import styles from './Users.module.scss'

const Users: FC = () => {
	const { data, isLoading, handleSearch, deleteAsync, searchTerm } =
		useUsersTable()
	return (
		<Meta title='Администратор - пользователи'>
			<AdminNavigation />
			<Heading variant='h2' title='Пользователи' className={styles.title} />
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
			<AdminTable
				notFoundText='Пользователи не найдены'
				isLoading={isLoading}
				itemsHeader={['Email', 'Дата регистрации', 'Действия']}
				items={data || []}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default Users
