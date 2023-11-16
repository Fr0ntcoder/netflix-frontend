import cn from 'classnames'
import { FC } from 'react'

import SearchList from '@/components/layout/sidebar/search/search-list/SearchList'
import SearchField from '@/components/ui/form-elements/search-field/SearchField'

import { useMovies } from '@/hooks/movie/useMovies'

import styles from './Search.module.scss'

type TSearch = {
	className?: string
}
const Search: FC<TSearch> = ({ className }) => {
	const {
		isSuccess,
		data: movie,
		handleSearch,
		searchTerm,
		debouncedSearch
	} = useMovies()
	return (
		<div className={cn(styles.search, className)}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && debouncedSearch && <SearchList movies={movie || []} />}
		</div>
	)
}

export default Search
