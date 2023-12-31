import { FC } from 'react'

import AdminHeader from '@/ui/Admin/AdminHeader'
import AdminNavigation from '@/ui/Admin/AdminNavigation'
import AdminTable from '@/ui/Admin/AdminTable'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

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
