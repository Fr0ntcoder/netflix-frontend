import { FC } from 'react'

import SearchList from '@/components/layout/Sidebar/SearchList/SearchList'
import SearchField from '@/components/ui/fields/search-field/SearchField'

import { useMovieSearch } from '@/hooks/movie/useMovieSearch'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { isSuccess, data: movie, handleSearch, searchTerm } = useMovieSearch()
	return (
		<div className={styles.search}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={movie || []} />}
		</div>
	)
}

export default Search
