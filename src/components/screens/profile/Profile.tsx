import { FC } from 'react'

import Meta from '@/components/ui/meta/Meta'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	return (
		<Meta title='Профиль' description=''>
			<div className={styles.home}>Профиль</div>
		</Meta>
	)
}

export default Profile
