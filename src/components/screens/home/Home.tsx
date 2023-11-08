import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Meta from '@/components/ui/meta/Meta'

type THome = {}

const Home: FC<THome> = () => {
	return (
		<Meta title='Главная' description='Главная страница'>
			<Layout>45545</Layout>
		</Meta>
	)
}

export default Home
