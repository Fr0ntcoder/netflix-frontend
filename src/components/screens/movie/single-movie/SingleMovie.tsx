import dynamic from 'next/dynamic'
import { TMoviePage } from 'pages/movie/[slug]'
import { FC } from 'react'

import MovieContent from '@/components/screens/movie/single-movie/movie-content/MovieContent'
import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import styles from './SingleMovie.module.scss'

const DynamicVideoPlayer = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)
const DynamicMovieRating = dynamic(() => import('./movie-rating/MovieRating'), {
	ssr: false,
})
const SingleMovie: FC<TMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie.title}>
			<Banner image={movie.bigPoster} className={styles.banner}>
				<MovieContent content={movie} />
			</Banner>
			<DynamicVideoPlayer videoSource={movie.videoUrl} slug={movie.slug} />
			<Heading title="Похожие фильмы" variant="h5" className={styles.title} />
			<Gallery items={similarMovies} />
			<DynamicMovieRating movieId={movie._id} slug={movie.slug} />
		</Meta>
	)
}

export default SingleMovie
