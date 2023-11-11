import cn from 'classnames'
import { FC } from 'react'

import SearchList from '@/components/layout/sidebar/search/search-list/SearchList'
import SearchField from '@/components/ui/fields/search-field/SearchField'

import { useMovieSearch } from '@/hooks/movie/useMoviesSearch'

import styles from './Search.module.scss'

type TSearch = {
	className?: string
}
const Search: FC<TSearch> = ({ className }) => {
	const { isSuccess, data: movie, handleSearch, searchTerm } = useMovieSearch()
	return (
		<div className={cn(styles.search, className)}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={movie || []} />}
		</div>
	)
}

export default Search
