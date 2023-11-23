import Users from '@/screens/Admin/Users'

import { NextPageAuth } from '@/shared/types/auth'

const UsersPage: NextPageAuth = () => {
	return <Users />
}
UsersPage.isAdmin = true
export default UsersPage
