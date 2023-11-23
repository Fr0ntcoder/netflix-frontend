import { FC } from 'react'

import AdminHeader from '@/ui/Admin/AdminHeader'
import AdminNavigation from '@/ui/Admin/AdminNavigation'
import AdminTable from '@/ui/Admin/AdminTable'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

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
