import Movies from '@/screens/Admin/Movies/Movies'

import { NextPageAuth } from '@/shared/types/auth.types'

const MoviesPage: NextPageAuth = () => {
	return <Movies />
}

MoviesPage.isAdmin = true

export default MoviesPage
