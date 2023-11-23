import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/auth/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()
	const redirect = String(query?.redirect || '/')

	useEffect(() => {
		if (user) push(redirect)
	}, [query, user, push])
}
