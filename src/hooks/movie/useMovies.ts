import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { MovieService } from 'service/movie/movie.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useMovies = () => {
	const queryClient = useQueryClient()
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

	const { mutateAsync: deleteAsync } = useMutation(
		['delete movies'],
		(id: string) => MovieService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('movies')
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			debouncedSearch,
			searchTerm,
			deleteAsync
		}),
		[queryData, searchTerm, deleteAsync, debouncedSearch]
	)
}
