import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'red' | 'yellow'
	className?: string
	children: ReactNode
}

const Button: FC<IButton> = ({ variant, className, children, ...props }) => {
	return (
		<button
			{...props}
			className={clsx(styles.button, className, {
				[styles.red]: variant === 'red',
				[styles.yellow]: variant === 'yellow'
			})}
		>
			{children}
		</button>
	)
}

export default Button
