import { TActor } from 'service/actor/actor.types'
import { TGenre } from 'service/genre/genre.types'

export const parseGenres = (genres: TGenre[] | TActor[]) => {
	const arr = genres?.map((item) => item.name)
	return arr.join(', ')
}
