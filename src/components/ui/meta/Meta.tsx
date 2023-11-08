import Head from 'next/head'
import { FC } from 'react'

type TMeta = {
	title: string
	description: string
	children: React.ReactNode
}
const Meta: FC<TMeta> = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
			{children}
		</>
	)
}
export default Meta
