import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import InputField from '@/ui/FormElements/InputField/InputField'

import styles from './SlugField.module.scss'

interface TSlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<TSlugField> = ({ generate, register, error }) => {
	return (
		<div className={styles.slug}>
			<InputField
				{...register('slug', {
					required: 'Введите slug',
				})}
				placeholder="Введите slug"
				error={error}
				className={styles.input}
			/>
			<div className={styles.btn} onClick={generate}>
				Сгенерировать
			</div>
		</div>
	)
}

export default SlugField
