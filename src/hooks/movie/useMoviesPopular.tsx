import { useQuery } from 'react-query'
import { MovieService } from 'service/movie/movie.service'

export const useMoviesPopular = () => {
	return (
		useQuery(['movies popular'], () => MovieService.getMostPopular(), {
			select: ({ data }) => data
		}) || []
	)
}
