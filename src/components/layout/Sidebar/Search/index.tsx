import cn from 'classnames'
import { FC } from 'react'

import SearchList from '@/layout/Sidebar/Search/SearchList'

import SearchField from '@/ui/FormElements/SearchField'

import { useMovies } from '@/hooks/movies/useMovies'

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
		debouncedSearch,
	} = useMovies()
	return (
		<div className={cn(styles.search, className)}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && debouncedSearch && <SearchList movies={movie || []} />}
		</div>
	)
}

export default Search
