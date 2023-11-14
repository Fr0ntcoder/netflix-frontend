import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { UsersService } from 'service/users/users.service'

import { useDebounce } from '@/hooks/other/useDebounce'

import { TTableItem } from '@/shared/types/table.types'

import { dateFormat } from '@/utils/date/date-format'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users', debouncedSearch],
		() => UsersService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(item): TTableItem => ({
						_id: item._id,
						items: [item.email, dateFormat(item.createdAt)]
					})
				)
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
				queryData.refetch()
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
