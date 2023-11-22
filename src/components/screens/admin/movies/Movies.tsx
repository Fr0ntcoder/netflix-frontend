import { FC } from 'react'

import AdminHeader from '@/components/ui/admin/admin-header/AdminHeader'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'

/* import AdminHeader from '@/components/ui/admin/admin-header/AdminHeader'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading' */
import Meta from '@/components/ui/meta/Meta'

import { useMoviesTable } from '@/hooks/movies/useMoviesTable'

import { AdminMoviesUrl } from '@/shared/constants.enum'

import styles from './Movies.module.scss'

const Movies: FC = () => {
	const { data, isLoading, handleSearch, searchTerm, deleteAsync } =
		useMoviesTable()
	return (
		<Meta title="Администратор - фильмы">
			<AdminNavigation />
			<Heading variant="h2" title="Фильм" className={styles.title} />
			<AdminHeader
				link={AdminMoviesUrl.СREATE}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.header}
			/>
			<AdminTable
				notFoundText="Фильмы не найдены"
				isLoading={isLoading}
				itemsHeader={['Название', 'Жанры', 'Рейтинг', 'Действия']}
				items={data || []}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default Movies
