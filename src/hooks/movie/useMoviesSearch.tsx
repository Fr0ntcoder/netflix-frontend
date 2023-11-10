import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from 'service/movie/movie.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useMovieSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['movie', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm }
}
