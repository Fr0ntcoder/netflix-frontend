import { useQuery } from 'react-query'
import { ActorsService } from 'service/actors/actors.service'

import { toastError } from '@/utils/toast-error'

import { TOption } from '../../components/ui/form-elements/select/select.types'

export const useAdminActor = () => {
	const queryData = useQuery(['select actor'], () => ActorsService.getAll(), {
		select: ({ data }) =>
			data.map(
				(item): TOption => ({
					label: item.name,
					value: item._id
				})
			),
		onError(error) {
			toastError(error, 'Актёр')
		}
	})

	return queryData
}
