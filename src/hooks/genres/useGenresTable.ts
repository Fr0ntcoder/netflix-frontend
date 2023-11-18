import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenresService } from 'service/genres/genres.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'
import { TSearch } from '@/shared/types/search.types'

import { dateFormat } from '@/utils/date/date-format'
import { trimText } from '@/utils/string/trim-text'
import { toastError } from '@/utils/toast-error'

export const useGenresTable = () => {
	const { push } = useRouter()
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genres table', debouncedSearch],
		() => GenresService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): TSearch => ({
						_id: genre._id,
						link: `${EnumContstantsAdminUrl.GENRE_EDIT}/${genre._id}`,
						items: [
							genre.name,
							trimText(genre.description, 20),
							dateFormat(genre.createdAt)
						]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation(
		['create genres table'],
		() => GenresService.create(),
		{
			onError(error) {
				toastError(error, 'Ошибка создания')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create genre', 'create was successful')
				push(`${EnumContstantsAdminUrl.GENRE_EDIT}/${_id}`)
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		['delete genres table'],
		(id: string) => GenresService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('genres table')
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
