import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import SearchField from '@/components/ui/form-elements/search-field/SearchField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useUsers } from '@/hooks/users/useUsers'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { dateFormat } from '@/utils/date/date-format'

import styles from './Users.module.scss'

const Users: FC = () => {
	const { data, isLoading, handleSearch, searchTerm } = useUsers()
	const modifData = data?.map(item => ({
		_id: item._id,
		link: `${EnumContstantsAdminUrl.USER_EDIT}/${item._id}`,
		items: [item.email, dateFormat(item.createdAt)]
	}))
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
				items={modifData || []}
			/>
		</Meta>
	)
}

export default Users
