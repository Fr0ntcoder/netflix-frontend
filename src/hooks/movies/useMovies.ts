import { ChangeEvent, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from 'service/movie/movie.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movies', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			debouncedSearch,
			searchTerm
		}),
		[queryData, searchTerm, debouncedSearch]
	)
}
