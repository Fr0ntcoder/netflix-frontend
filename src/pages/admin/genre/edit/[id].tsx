import GenreEdit from '@/screens/Admin/Genres/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GerneEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GerneEditPage.isAdmin = true

export default GerneEditPage
