import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { UserService } from 'service/user/user.service'
import { TProfileInput } from 'service/user/user.types'

import { toastError } from '@/utils/toast-error'

export const useProfile = (setValue: UseFormSetValue<TProfileInput>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
		},
		onError(error) {
			toastError(error, 'Get profile')
		},
	})

	const { mutateAsync } = useMutation(
		['update profile'],
		(data: TProfileInput) => UserService.getUpdateProfile(data),
		{
			onError(error) {
				toastError(error, 'Ошибка обновления')
			},
			onSuccess() {
				toastr.success('Обновление профиля', 'Вы успешно обновили профиль')
			},
		}
	)

	const onSubmit: SubmitHandler<TProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return { mutateAsync, onSubmit }
}
