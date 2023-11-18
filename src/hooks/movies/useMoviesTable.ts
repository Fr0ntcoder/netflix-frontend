import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { MovieService } from 'service/movie/movie.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { parseGenres } from '@/utils/parse-genres'
import { toastError } from '@/utils/toast-error'

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
						link: `${EnumContstantsAdminUrl.MOVIE_EDIT}/${movie._id}`,
						items: [
							movie.title,
							parseGenres(movie.genres),
							String(movie.rating)
						]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation(
		['create movies table'],
		() => MovieService.create(),
		{
			onError(error) {
				toastError(error, 'Ошибка создания фильма')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Фильм', 'Начало создания фильма')
				push(`${EnumContstantsAdminUrl.MOVIE_EDIT}/${_id}`)
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		['delete movies table'],
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
			deleteAsync,
			createAsync
		}),
		[queryData, searchTerm, deleteAsync, debouncedSearch]
	)
}
