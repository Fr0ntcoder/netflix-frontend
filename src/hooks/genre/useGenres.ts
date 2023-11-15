import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GenreService } from 'service/genre/genre.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useGenres = () => {
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genres', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) => data
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete genres'],
		(id: string) => GenreService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('genres')
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
