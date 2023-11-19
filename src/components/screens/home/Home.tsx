import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'
import Slider from '@/components/ui/slider/Slider'

import styles from './Home.module.scss'

export type THome = {
	slides: TMovie[]
}
const Home: FC<THome> = ({ slides }) => {
	return (
		<Meta title='Главная' description='Главная страница'>
			<Heading
				title='Смотреть фильма онлайн'
				variant='h5'
				className={styles.title}
			/>
			<Slider slides={slides} />
		</Meta>
	)
}

export default Home
