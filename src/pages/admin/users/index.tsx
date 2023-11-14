import Users from '@/components/screens/admin/users/Users'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersPage: NextPageAuth = () => {
	return <Users />
}
UsersPage.isAdmin = true
export default UsersPage
