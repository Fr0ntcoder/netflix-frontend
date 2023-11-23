import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from '@/shared/types/input.types'

import styles from './InputField.module.scss'

const InputField = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type = 'text', error, className, ...props }, ref) => {
		return (
			<div className={cn(styles.input, className)}>
				<label className={styles.label}>
					<span className={styles.text}>{placeholder}</span>
					<input
						type={type}
						{...props}
						ref={ref}
						className={cn(styles.field, {
							[styles.invalid]: error,
						})}
					/>
				</label>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		)
	}
)

export default InputField
