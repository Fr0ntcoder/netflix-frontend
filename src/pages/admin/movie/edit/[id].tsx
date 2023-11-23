import MovieEdit from '@/screens/Admin/Movies/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isAdmin = true

export default MovieEditPage
