import cn from 'classnames'
import { FC } from 'react'

import MenuItem, {
	TMenuItem
} from '@/components/layout/navigation/menu/menu-item/MenuItem'

import styles from './Menu.module.scss'

export type TMenu = {
	title: string
	items: TMenuItem[]
	className?: string
}

const Menu: FC<TMenu> = ({ title, items, className }) => {
	const list = items.map(item => <MenuItem key={item.link} item={item} />)
	return (
		<div className={cn(styles.menu, className)}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>{list}</ul>
		</div>
	)
}

export default Menu
