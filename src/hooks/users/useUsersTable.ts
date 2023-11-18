import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { UsersService } from 'service/users/users.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { dateFormat } from '@/utils/date/date-format'

import { TSearch } from './../../shared/types/search.types'

export const useUsersTable = () => {
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users table', debouncedSearch],
		() => UsersService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): TSearch => ({
						_id: user._id,
						link: `${EnumContstantsAdminUrl.USER_EDIT}/${user._id}`,
						items: [user.email, dateFormat(user.createdAt)]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete users table'],
		(id: string) => UsersService.delete(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users')
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
