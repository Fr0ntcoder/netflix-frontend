import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/hooks/auth/useAuth'

import { TypeComponentAuthField } from '@/shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthField> = ({
	children,
	Component: { isAdmin, isUser },
}) => {
	const { user } = useAuth()
	const router = useRouter()

	const Children = () => <>{children}</>

	if (user?.isAdmin) {
		return <Children />
	}

	if (isAdmin) {
		router.pathname !== '/' && router.replace('/')
		return null
	}

	const isUserExist = user && !user.isAdmin

	if (isUserExist && isUser) {
		return <Children />
	} else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
