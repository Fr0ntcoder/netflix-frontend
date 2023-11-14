import cn from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'red' | 'yellow'
	children: ReactNode
}

const Button: FC<IButton & IClass> = ({
	variant,
	className,
	children,
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.red]: variant === 'red',
				[styles.yellow]: variant === 'yellow'
			})}
		>
			{children}
		</button>
	)
}

export default Button
