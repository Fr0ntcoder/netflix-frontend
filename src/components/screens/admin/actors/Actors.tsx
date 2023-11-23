import { FC } from 'react'

import AdminHeader from '@/components/ui/admin/admin-header/AdminHeader'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import AdminTable from '@/components/ui/admin/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useActorsTable } from '@/hooks/actors/useActorsTable'

import { AdminActorsUrl } from '@/shared/constants.enum'

import styles from './Actors.module.scss'

const Actors: FC = () => {
	const { data, isLoading, handleSearch, searchTerm, deleteAsync } =
		useActorsTable()
	return (
		<Meta title="Администратор - актёры">
			<AdminNavigation />
			<Heading variant="h2" title="Актёры" className={styles.title} />
			<AdminHeader
				link={AdminActorsUrl.СREATE}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.header}
			/>
			<AdminTable
				notFoundText="Актёры не найдены"
				isLoading={isLoading}
				itemsHeader={['Имя', 'Количество просмотров', 'Действия']}
				items={data || []}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default Actors
