import MovieCreate from '@/screens/Admin/Movies/MovieCreate/MovieCreate'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieCreatePage: NextPageAuth = () => {
	return <MovieCreate />
}

MovieCreatePage.isAdmin = true
export default MovieCreatePage
