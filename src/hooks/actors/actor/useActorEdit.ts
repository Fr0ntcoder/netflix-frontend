import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { TActorEditInput } from 'service/actors/actor.types'
import { ActorsService } from 'service/actors/actors.service'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { getKeys } from '@/utils/object/get-keys'
import { toastError } from '@/utils/toast-error'

export const useActorEdit = (setValue: UseFormSetValue<TActorEditInput>) => {
	const { query, push } = useRouter()

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorsService.getById(actorId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach(key => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Ошибка создания актёра')
			}
		}
	)

	const { mutateAsync } = useMutation(
		['update actor'],
		(data: TActorEditInput) => ActorsService.update(actorId, data),
		{
			onError(error) {
				toastError(error, 'Ошибка обновления')
			},
			onSuccess() {
				toastr.success('Обновление актёра', 'Вы успешно изменили актёра')
				push(EnumContstantsAdminUrl.ACTORS)
			}
		}
	)

	const onSubmit: SubmitHandler<TActorEditInput> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
