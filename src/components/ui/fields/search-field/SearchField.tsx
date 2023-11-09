import { ChangeEvent, FC } from 'react'

import Icon from '@/components/ui/icon/Icon'

import styles from './SearchField.module.scss'

type TSearchField = {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchField: FC<TSearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<label className={styles.search} htmlFor='search'>
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
