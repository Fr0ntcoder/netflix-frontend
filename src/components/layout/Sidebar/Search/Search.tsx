import clsx from 'clsx'
import { FC } from 'react'

import SearchList from '@/components/layout/Sidebar/Search/SearchList/SearchList'
import SearchField from '@/components/ui/fields/search-field/SearchField'

import { useMovieSearch } from '@/hooks/movie/useMoviesSearch'

import styles from './Search.module.scss'

type TSearch = {
	className?: string
}
const Search: FC<TSearch> = ({ className }) => {
	const { isSuccess, data: movie, handleSearch, searchTerm } = useMovieSearch()
	return (
		<div className={clsx(styles.search, className)}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={movie || []} />}
		</div>
	)
}

export default Search
