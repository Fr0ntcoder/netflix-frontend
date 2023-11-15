import { FC } from 'react'

import UsersSearch from '@/components/screens/admin/users/users-search/UsersSearch'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useGenres } from '@/hooks/genre/useGenres'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { dateFormat } from '@/utils/date/date-format'
import { trimText } from '@/utils/text/trim-text'

import styles from './Genres.module.scss'

const Genres: FC = () => {
	const { data, isLoading, handleSearch, searchTerm } = useGenres()
	const modifData = data?.map(item => ({
		_id: item._id,
		link: `${EnumContstantsAdminUrl.GENRE_EDIT}/${item._id}`,
		items: [
			item.name,
			trimText(item.description, 20),
			dateFormat(item.createdAt)
		]
	}))
	return (
		<Meta title='Администратор - жанры'>
			<AdminNavigation />
			<Heading variant='h2' title='Фильм' className={styles.title} />
			<UsersSearch
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
			<AdminTable
				notFoundText='Фильмы не найдены'
				isLoading={isLoading}
				itemsHeader={['Название', 'Описание', 'Дата', 'Действия']}
				items={modifData || []}
			/>
		</Meta>
	)
}

export default Genres
