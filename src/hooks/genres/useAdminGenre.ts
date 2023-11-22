import { useQuery } from 'react-query'
import { GenreService } from 'service/genre/genre.service'

import { toastError } from '@/utils/toast-error'

import { TOption } from './../../components/ui/form-elements/select/select.types'

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
