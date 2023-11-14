import { useState } from 'react'
import { useQuery } from 'react-query'
import { UsersService } from 'service/users/users.service'

import { useDebounce } from '@/hooks/other/useDebounce'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['users', debouncedSearch],
		() => UsersService.getAll(debouncedSearch),
		{
			select: ({ data }) => data
		}
	)

	return { ...queryData }
}
