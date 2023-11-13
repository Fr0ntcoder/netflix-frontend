import { FC } from 'react'

import Meta from '@/components/ui/meta/Meta'

import styles from './Home.module.scss'

type THome = {}

const Home: FC<THome> = () => {
	return (
		<Meta title='Главная' description='Главная страница'>
			<div className={styles.home}>Home</div>
		</Meta>
	)
}

export default Home
