import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GenreService } from 'service/genre/genre.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'
import { TSearch } from '@/shared/types/search.types'

import { dateFormat } from '@/utils/date/date-format'
import { trimText } from '@/utils/string/trim-text'

export const useGenresTable = () => {
	const { push } = useRouter()
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genres table', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): TSearch => ({
						_id: genre._id,
						link: `${EnumContstantsAdminUrl.GENRE_EDIT}/${genre._id}`,
						items: [
							genre.name,
							trimText(genre.description, 20),
							dateFormat(genre.createdAt),
						],
					})
				),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete genres table'],
		(id: string) => GenreService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('genres table')
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
