import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import SearchField from '@/components/ui/form-elements/search-field/SearchField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useMovies } from '@/hooks/movie/useMovies'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { parseGenres } from '@/utils/parse-genres'

import styles from './Movies.module.scss'

const Movies: FC = () => {
	const { data, isLoading, handleSearch, searchTerm } = useMovies()
	const modifData = data?.map(item => ({
		_id: item._id,
		link: `${EnumContstantsAdminUrl.MOVIE_EDIT}/${item._id}`,
		items: [item.title, parseGenres(item.genres), String(item.rating)]
	}))
	return (
		<Meta title='Администратор - фильмы'>
			<AdminNavigation />
			<Heading variant='h2' title='Фильм' className={styles.title} />
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
			<AdminTable
				notFoundText='Фильмы не найдены'
				isLoading={isLoading}
				itemsHeader={['Название', 'Жанры', 'Рейтинг', 'Действия']}
				items={modifData || []}
			/>
		</Meta>
	)
}

export default Movies
