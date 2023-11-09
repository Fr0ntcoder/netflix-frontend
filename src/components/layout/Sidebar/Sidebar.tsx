import { FC } from 'react'

import Search from '@/components/layout/Sidebar/Search/Search'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Search />
		</aside>
	)
}

export default Sidebar
