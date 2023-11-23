import Admin from '@/screens/Admin'

import { NextPageAuth } from '@/shared/types/auth'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isAdmin = true

export default AdminPage
