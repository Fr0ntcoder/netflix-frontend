import { FC } from 'react'

import AdminHeader from '@/ui/Admin/AdminHeader'
import AdminNavigation from '@/ui/Admin/AdminNavigation'
import AdminTable from '@/ui/Admin/AdminTable'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

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
