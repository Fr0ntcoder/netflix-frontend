import { useQuery } from 'react-query'
import { GenresService } from 'service/genres/genres.service'

import { toastError } from '@/utils/toast-error'

import { TOption } from './../../components/ui/form-elements/select/select.types'

export const useAdminGenre = () => {
	const queryData = useQuery(['select genre'], () => GenresService.getAll(), {
		select: ({ data }) =>
			data.map(
				(item): TOption => ({
					label: item.name,
					value: item._id
				})
			),
		onError(error) {
			toastError(error, 'Жанр')
		}
	})

	return queryData
}
