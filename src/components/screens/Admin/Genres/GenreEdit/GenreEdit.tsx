import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TGenreEditInput } from 'service/genre/genre.types'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/ui/Admin/AdminNavigation/AdminNavigation'
import Button from '@/ui/Buttons/Button/Button'
import InputField from '@/ui/FormElements/InputField/InputField'
import SlugField from '@/ui/FormElements/SlugField/SlugField'
import Meta from '@/ui/Meta/Meta'
import Heading from '@/ui/heading/Heading'

import { useGenreEdit } from '@/hooks/genres/genre/useGenreEdit'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './GenreEdit.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@/ui/FormElements/TextEditor/TextEditor'),
	{ ssr: false }
)
const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<TGenreEditInput>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Meta title="Администратор - редактирование жанра" description="">
			<AdminNavigation />
			<Heading
				title="Редактирование жанра"
				variant="h3"
				className={styles.title}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.top}>
					<InputField
						placeholder="Имя"
						{...register('name', {
							required: 'Имя обязателено',
						})}
						error={errors.name}
						className={styles.input}
					/>
					<InputField
						placeholder="Иконка"
						{...register('icon', {
							required: 'Иконка обязателена',
						})}
						error={errors.icon}
						className={styles.input}
					/>
					<SlugField
						register={register}
						error={errors.slug}
						generate={() => {
							setValue('slug', generateSlug(getValues('name')))
						}}
					/>
				</div>
				<div className={styles.editor}>
					<Controller
						control={control}
						name="description"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<DynamicTextEditor
								onChange={onChange}
								value={value}
								error={error}
								placeholder="Описание"
							/>
						)}
						rules={{
							validate: {
								required: (v) =>
									(v && stripHtml(v).result.length > 0) || 'Введите описание',
							},
						}}
					/>
				</div>
				<Button variant="red" className={styles.btn}>
					Обновить
				</Button>
			</form>
		</Meta>
	)
}

export default GenreEdit
