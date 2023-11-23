import cn from 'classnames'
import { ChangeEvent, FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './SearchField.module.scss'

type TSearchField = {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchField: FC<IClass & TSearchField> = ({
	searchTerm,
	handleSearch,
	className
}) => {
	return (
		<label className={cn(styles.search, className)} htmlFor='search'>
			<Icon name='MdSearch' />
			<input
				type='search'
				placeholder='Поиск...'
				value={searchTerm}
				onChange={handleSearch}
				id='search'
			/>
		</label>
	)
}

export default SearchField
