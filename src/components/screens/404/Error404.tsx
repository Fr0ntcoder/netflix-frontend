import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Meta from '@/components/ui/meta/Meta'

const Error404: FC = () => {
	return (
		<Meta title='Страница не найдена' description=''>
			<Layout>Страница не найдена</Layout>
		</Meta>
	)
}

export default Error404
