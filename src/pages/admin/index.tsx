import Admin from '@/screens/Admin/Admin'

import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isAdmin = true

export default AdminPage
