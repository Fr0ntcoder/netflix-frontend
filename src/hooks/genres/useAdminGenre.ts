import { useQuery } from 'react-query'
import { GenreService } from 'service/genre/genre.service'

import { TOption } from '@/shared/types/select.types'

import { toastError } from '@/utils/toast-error'

export const useAdminGenre = () => {
	const queryData = useQuery(['select genre'], () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(item): TOption => ({
					label: item.name,
					value: item._id,
				})
			),
		onError(error) {
			toastError(error, 'Жанр')
		},
	})

	return queryData
}
