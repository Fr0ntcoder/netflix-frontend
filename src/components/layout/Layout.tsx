import { FC, PropsWithChildren } from 'react'

import Navigation from '@/components/layout/navigation/Navigation'
import Sidebar from '@/components/layout/sidebar/Sidebar'

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
