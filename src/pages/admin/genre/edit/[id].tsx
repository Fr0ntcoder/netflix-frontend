import GenreEdit from '@/components/screens/admin/genres/genre-edit/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GerneEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GerneEditPage.isAdmin = true

export default GerneEditPage
