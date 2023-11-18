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

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import styles from './Movies.module.scss'

const Movies: FC = () => {
	const {
		data,
		isLoading,
		handleSearch,
		searchTerm,
		createAsync,
		deleteAsync
	} = useMoviesTable()
	return (
		<Meta title='Администратор - фильмы'>
			<AdminNavigation />
			<Heading variant='h2' title='Фильм' className={styles.title} />
			<AdminHeader
				link={EnumContstantsAdminUrl.MOVIE_СREATE}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				onHandler={createAsync}
				className={styles.header}
			/>
			<AdminTable
				notFoundText='Фильмы не найдены'
				isLoading={isLoading}
				itemsHeader={['Название', 'Жанры', 'Рейтинг', 'Действия']}
				items={data || []}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default Movies
