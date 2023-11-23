import UserEdit from '@/screens/Admin/Users/UserEdit/UserEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isAdmin = true

export default UserEditPage
