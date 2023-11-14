import cn from 'classnames'
import { ChangeEvent, FC } from 'react'

import SearchField from '@/components/ui/fields/search-field/SearchField'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './UsersSearch.module.scss'

type TUsersSearch = {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const UsersSearch: FC<TUsersSearch & IClass> = ({
	searchTerm,
	handleSearch,
	className
}) => {
	return (
		<div className={cn(styles.root, className)}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
		</div>
	)
}

export default UsersSearch
