import MovieCreate from '@/components/screens/admin/movies/movie-create/MovieCreate'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieCreatePage: NextPageAuth = () => {
	return <MovieCreate />
}

MovieCreatePage.isAdmin = true
export default MovieCreatePage
