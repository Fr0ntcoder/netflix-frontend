import MovieEdit from '@/components/screens/admin/movies/movie-edit/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isAdmin = true

export default MovieEditPage
