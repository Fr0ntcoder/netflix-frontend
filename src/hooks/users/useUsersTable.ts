import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { UserService } from 'service/user/user.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { AdminUsersUrl } from '@/shared/constants.enum'
import { TSearch } from '@/shared/types/search.types'

import { dateFormat } from '@/utils/date/date-format'

export const useUsersTable = () => {
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users table', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): TSearch => ({
						_id: user._id,
						link: `${AdminUsersUrl.EDIT}/${user._id}`,
						items: [user.email, dateFormat(user.createdAt)],
					})
				),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete users table'],
		(id: string) => UserService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users table')
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
