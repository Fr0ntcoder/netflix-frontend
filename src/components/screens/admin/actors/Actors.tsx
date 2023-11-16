import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import SearchField from '@/components/ui/form-elements/search-field/SearchField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useActors } from '@/hooks/actors/useActors'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import styles from './Actors.module.scss'

const Actors: FC = () => {
	const { data, isLoading, handleSearch, searchTerm } = useActors()
	const modifData = data?.map(item => ({
		_id: item._id,
		link: `${EnumContstantsAdminUrl.ACTOR_EDIT}/${item._id}`,
		items: [item.name, String(item.countMovies)]
	}))
	return (
		<Meta title='Администратор - актёры'>
			<AdminNavigation />
			<Heading variant='h2' title='Актёры' className={styles.title} />
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
			<AdminTable
				notFoundText='Актёры не найдены'
				isLoading={isLoading}
				itemsHeader={['Имя', 'Количество просмотров', 'Действия']}
				items={modifData || []}
			/>
		</Meta>
	)
}

export default Actors
