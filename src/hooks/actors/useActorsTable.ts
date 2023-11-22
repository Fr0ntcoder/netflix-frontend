import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { ActorService } from 'service/actor/actor.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { AdminActorsUrl } from '@/shared/constants.enum'

import { TSearch } from './../../shared/types/search.types'

export const useActorsTable = () => {
	const { push } = useRouter()
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actors table', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): TSearch => ({
						_id: genre._id,
						link: `${AdminActorsUrl.EDIT}/${genre._id}`,
						items: [genre.name, String(genre.countMovies)],
					})
				),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete actors table'],
		(id: string) => ActorService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('actors table')
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
