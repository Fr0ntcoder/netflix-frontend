import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'
import Meta from '@/components/ui/meta/Meta'

type THome = {}

const Home: FC<THome> = () => {
	return (
		<Meta title='Главная' description='Главная страница'>
			<Layout>
				<Button
					variant='red'
					onClick={() => toastr.success('Тест', 'Тестовое сообщение')}
				>
					Кнопка
				</Button>
			</Layout>
		</Meta>
	)
}

export default Home
