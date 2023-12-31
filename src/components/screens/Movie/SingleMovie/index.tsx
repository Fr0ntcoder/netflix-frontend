import dynamic from 'next/dynamic'
import { TMoviePage } from 'pages/movie/[slug]'
import { FC } from 'react'

import Banner from '@/ui/Banner'
import Gallery from '@/ui/Gallery'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

import { useOpenedCount } from '@/hooks/movies/useOpenedCount'

import styles from './SingleMovie.module.scss'

const DynamicVideoPlayer = dynamic(() => import('@/ui/VideoPlayer'), {
	ssr: false,
})
const DynamicMovieRating = dynamic(() => import('./MovieRating'), {
	ssr: false,
})
const DynamicMovieContent = dynamic(() => import('./MovieContent'), {
	ssr: false,
})
const SingleMovie: FC<TMoviePage> = ({ movie, similarMovies }) => {
	useOpenedCount(movie.slug)

	return (
		<Meta title={movie.title}>
			<Banner image={movie.bigPoster} className={styles.banner}>
				<DynamicMovieContent content={movie} />
			</Banner>
			<DynamicVideoPlayer
				videoSource={movie.videoUrl}
				slug={movie.slug}
				className={styles.video}
			/>
			<Heading title="Похожие фильмы" variant="h5" className={styles.title} />
			<Gallery items={similarMovies} className={styles.similar} />
			<DynamicMovieRating movieId={movie._id} slug={movie.slug} />
		</Meta>
	)
}

export default SingleMovie
