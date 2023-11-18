import cn from 'classnames'
import Link from 'next/link'
import { ChangeEvent, FC } from 'react'

import SearchField from '@/components/ui/form-elements/search-field/SearchField'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './AdminHeader.module.scss'

type TAdminHeader = {
	searchTerm: string
	link: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	onHandler?: () => void
}
const AdminHeader: FC<TAdminHeader & IClass> = ({
	searchTerm,
	handleSearch,
	className,
	link
}) => {
	return (
		<div className={cn(styles.header, className)}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				className={styles.search}
			/>
			<Link href={link} className={styles.btn}>
				Создать
			</Link>
		</div>
	)
}

export default AdminHeader