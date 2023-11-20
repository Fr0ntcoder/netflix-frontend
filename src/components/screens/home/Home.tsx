import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Gallery from '@/components/ui/gallery/Gallery'
import { TGallery } from '@/components/ui/gallery/gallery.types'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'
import Slider from '@/components/ui/slider/Slider'

import styles from './Home.module.scss'

export type THome = {
	movies: TMovie[]
	popularMovies: TGallery[]
	actors: TGallery[]
}
const Home: FC<THome> = ({ movies, popularMovies, actors }) => {
	return (
		<Meta title="Главная" description="Главная страница">
			<Heading
				title="Смотреть фильма онлайн"
				variant="h5"
				className={styles.title}
			/>
			<Slider slides={movies} className={styles.slider} />
			<Heading title="Сейчас смотрят" variant="h5" className={styles.title} />
			<Gallery items={popularMovies} className={styles.slider} />
			<Heading title="Лучшие актёры" variant="h5" className={styles.title} />
			<Gallery items={actors} />
		</Meta>
	)
}

export default Home
