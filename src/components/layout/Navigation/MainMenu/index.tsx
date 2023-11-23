import cn from 'classnames'
import { FC } from 'react'

import MenuItem, { TMenuItem } from '@/layout/Navigation/MainMenu/MenuItem'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './MainMenu.module.scss'

export type TMenu = {
	title: string
	items: TMenuItem[]
}

const MainMenu: FC<TMenu & IClass> = ({ title, items, className }) => {
	const list = items.map((item, i) => <MenuItem key={i} item={item} />)
	return (
		<div className={cn(styles.menu, className)}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>{list}</ul>
		</div>
	)
}

export default MainMenu
