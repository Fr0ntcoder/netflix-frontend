import { useQuery } from 'react-query'
import { UserService } from 'service/user/user.service'

import { useAuth } from '@/hooks/auth/useAuth'

export const useFavorites = () => {
	const { user } = useAuth()
	return useQuery(['favorite movies'], () => UserService.getFavorites(), {
		select: ({ data }) => data.slice(0, 4),
		enabled: !!user,
	})
}
