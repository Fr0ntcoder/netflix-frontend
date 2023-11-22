import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { UserService } from 'service/user/user.service'
import { TUserInput } from 'service/user/user.types'

import { AdminUsersUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

export const useUserEdit = (setValue: UseFormSetValue<TUserInput>) => {
	const { query, push } = useRouter()

	const userId = String(query.id)

	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getById(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError(error) {
				toastError(error, 'Get user')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update user',
		(data: TUserInput) => UserService.update(userId, data),
		{
			onError(error) {
				toastError(error, 'Обновление')
			},
			onSuccess() {
				toastr.success('Обновление', 'Вы успешно обновили!')
				push(AdminUsersUrl.ROOT)
			},
		}
	)

	const onSubmit: SubmitHandler<TUserInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
