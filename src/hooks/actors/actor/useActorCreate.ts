import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { TActorEditInput } from 'service/actors/actor.types'
import { ActorsService } from 'service/actors/actors.service'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

export const useActorCreate = () => {
	const { push } = useRouter()
	const { mutateAsync } = useMutation(
		['create actor'],
		(data: TActorEditInput) => ActorsService.create(data),
		{
			onError(error) {
				toastError(error, 'Этот актёр уже существует')
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

	return { mutateAsync, onSubmit }
}
