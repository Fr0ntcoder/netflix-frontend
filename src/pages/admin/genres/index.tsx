import Genres from '@/screens/Admin/Genres'

import { NextPageAuth } from '@/shared/types/auth'

const GenresPage: NextPageAuth = () => {
	return <Genres />
}

GenresPage.isAdmin = true

export default GenresPage
