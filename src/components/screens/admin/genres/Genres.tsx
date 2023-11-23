import { FC } from 'react'

import AdminHeader from '@/components/ui/admin/admin-header/AdminHeader'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useGenresTable } from '@/hooks/genres/useGenresTable'

import { AdminGenresUrl } from '@/shared/constants.enum'

import styles from './Genres.module.scss'

const Genres: FC = () => {
	const { data, isLoading, handleSearch, searchTerm, deleteAsync } =
		useGenresTable()
	return (
		<Meta title="Администратор - жанры">
			<AdminNavigation />
			<Heading variant="h2" title="Жанры" className={styles.title} />
			<AdminHeader
				link={AdminGenresUrl.СREATE}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.header}
			/>
			<AdminTable
				notFoundText="Фильмы не найдены"
				isLoading={isLoading}
				itemsHeader={['Название', 'Описание', 'Дата', 'Действия']}
				items={data || []}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default Genres
