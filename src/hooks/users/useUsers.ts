import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { UsersService } from 'service/users/users.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useUsers = () => {
	const queryClient = useQueryClient()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users', debouncedSearch],
		() => UsersService.getAll(debouncedSearch),
		{
			select: ({ data }) => data
			/* enabled: !!debouncedSearch */
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete users'],
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
