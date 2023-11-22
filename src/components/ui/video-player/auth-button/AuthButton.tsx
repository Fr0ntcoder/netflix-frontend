import Link from 'next/link'
import { FC } from 'react'

import { EnumContstantsUrl } from '@/shared/constants.enum'

type TAuthButton = {
	slug: string
}
const AuthButton: FC<TAuthButton> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${EnumContstantsUrl.MOVIE}/${slug}`}>
			Войти в систему
		</Link>
	)
}

export default AuthButton
