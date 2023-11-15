import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { TGenreEditInput } from 'service/genre/genre.types'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import InputField from '@/components/ui/fields/input-field/InputField'
import Heading from '@/components/ui/heading/Heading'

import { useGenreEdit } from '@/hooks/genre/useGenreEdit'

import styles from './GenreEdit.module.scss'

const GenreEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues
	} = useForm<TGenreEditInput>({ mode: 'onChange' })

	const { onSubmit } = useGenreEdit(setValue)
	return (
		<div className={styles.edit}>
			<AdminNavigation />
			<Heading title='Редактирование жанра' variant='h3' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.top}>
					<InputField
						placeholder='Имя'
						{...register('name', {
							required: 'Имя обязателено'
						})}
						error={errors.name}
						className={styles.input}
					/>
					<InputField
						placeholder='Иконка'
						{...register('icon', {
							required: 'Иконка обязателена'
						})}
						error={errors.icon}
						className={styles.input}
					/>
					<InputField
						placeholder='Имя'
						{...register('name', {
							required: 'Имя обязателено'
						})}
						error={errors.name}
						className={styles.input}
					/>
				</div>
			</form>
		</div>
	)
}

export default GenreEdit
