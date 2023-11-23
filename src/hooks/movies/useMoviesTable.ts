import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { MovieService } from 'service/movie/movie.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { AdminMoviesUrl } from '@/shared/constants.enum'

import { parseGenres } from '@/utils/parse-genres'

import { TSearch } from '../../shared/types/search.types'

export const useMoviesTable = () => {
	const { push } = useRouter()
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movies table', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): TSearch => ({
						_id: movie._id,
						link: `${AdminMoviesUrl.EDIT}/${movie._id}`,
						items: [
							movie.title,
							parseGenres(movie.genres),
							String(movie.rating),
						],
					})
				),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete movies table'],
		(id: string) => MovieService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('movies')
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			debouncedSearch,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync, debouncedSearch]
	)
}
