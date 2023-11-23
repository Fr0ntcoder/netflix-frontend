import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ActorService } from 'service/actor/actor.service'
import { TActorEditInput } from 'service/actor/actor.types'

import { AdminActorsUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

export const useActorCreate = () => {
	const { push } = useRouter()
	const { mutateAsync } = useMutation(
		['create actor'],
		(data: TActorEditInput) => ActorService.create(data),
		{
			onError(error) {
				toastError(error, 'Этот актёр уже существует')
			},
			onSuccess() {
				toastr.success('Создание актёра', 'Вы успешно создали актёра')
				push(AdminActorsUrl.ROOT)
			},
		}
	)

	const onSubmit: SubmitHandler<TActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { mutateAsync, onSubmit }
}
