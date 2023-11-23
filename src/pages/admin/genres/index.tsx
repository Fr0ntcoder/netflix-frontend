import Genres from '@/screens/Admin/Genres/Genres'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenresPage: NextPageAuth = () => {
	return <Genres />
}

GenresPage.isAdmin = true

export default GenresPage
