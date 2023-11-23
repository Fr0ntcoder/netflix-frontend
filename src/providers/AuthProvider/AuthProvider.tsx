import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useAuth } from '@/hooks/auth/useAuth'
import { useActions } from '@/hooks/other/useActions'

import { TypeComponentAuthField } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthField> = ({
	children,
	Component: { isAdmin, isUser },
}) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			checkAuth()
		}
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')

		if (!refreshToken && user) {
			logout()
		}
	}, [pathname])

	return !isAdmin && !isUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isAdmin, isUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
