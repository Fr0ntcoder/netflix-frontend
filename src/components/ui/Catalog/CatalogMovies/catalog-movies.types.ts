import { TMovie } from 'service/movie/movie.types'

export type TCatalogMovie = {
	title: string
	description?: string
	movies: TMovie[]
}
