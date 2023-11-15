import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { ActorsService } from 'service/actors/actors.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useActors = () => {
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actors', debouncedSearch],
		() => ActorsService.getAll(debouncedSearch),
		{
			select: ({ data }) => data
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete actors'],
		(id: string) => ActorsService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('actors')
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
