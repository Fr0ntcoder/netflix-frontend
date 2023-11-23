import Movies from '@/screens/Admin/Movies'

import { NextPageAuth } from '@/shared/types/auth'

const MoviesPage: NextPageAuth = () => {
	return <Movies />
}

MoviesPage.isAdmin = true

export default MoviesPage
