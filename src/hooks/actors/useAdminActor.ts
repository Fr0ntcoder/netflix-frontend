import { useQuery } from 'react-query'
import { ActorService } from 'service/actor/actor.service'

import { TOption } from '@/shared/types/select.types'

import { toastError } from '@/utils/toast-error'

export const useAdminActor = () => {
	const queryData = useQuery(['select actor'], () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(item): TOption => ({
					label: item.name,
					value: item._id,
				})
			),
		onError(error) {
			toastError(error, 'Актёр')
		},
	})

	return queryData
}
