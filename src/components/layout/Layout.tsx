import { FC, PropsWithChildren } from 'react'

import Navigation from '@/layout/Navigation/Navigation'
import Sidebar from '@/layout/Sidebar/Sidebar'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navigation />
			<div className={styles.main}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
