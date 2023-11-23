import cn from 'classnames'
import { FC } from 'react'

import styles from './SwitchField.module.scss'

type TSwitchField = {
	value: boolean
	onHandler: () => void
}
const SwitchField: FC<TSwitchField> = ({ onHandler, value }) => {
	return (
		<div
			className={cn(styles.btn, {
				[styles.active]: value,
			})}
			onClick={onHandler}
		>
			<span className={styles.circle}></span>
		</div>
	)
}

export default SwitchField
