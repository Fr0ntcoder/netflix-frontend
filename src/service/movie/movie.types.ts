import { TActor } from 'service/actors/actor.types'
import { TGenre } from 'service/genre/genre.types'

type TMovieParameters = {
	year: number
	duration: number
	country: string
}

export type TMovie = {
	_id: string
	poster: string
	rating: number
	slug: string
	bigPoster: string
	title: string
	parameters?: TMovieParameters
	videoUrl: string
	genres: TGenre[]
	actors: TActor[]
	isSendTelegram?: boolean
}
