import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

import { TypeComponentAuthField } from '@/shared/types/auth.types'

import '@/assets/styles/main.scss'

type TypeAppProps = AppProps & TypeComponentAuthField

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
