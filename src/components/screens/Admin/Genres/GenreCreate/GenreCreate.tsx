import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TGenreEditInput } from 'service/genre/genre.types'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/ui/Admin/AdminNavigation/AdminNavigation'
import Button from '@/ui/Buttons/Button/Button'
import InputField from '@/ui/FormElements/InputField/InputField'
import SlugField from '@/ui/FormElements/SlugField/SlugField'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { useGenreCreate } from '@/hooks/genres/genre/useGenreCreate'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './GenreCreate.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@/ui/FormElements/TextEditor/TextEditor'),
	{ ssr: false }
)
const GenreCreate: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<TGenreEditInput>({ mode: 'onChange' })

	const { onSubmit } = useGenreCreate()
	return (
		<Meta title="Администратор - создание жанра" description="">
			<AdminNavigation />
			<Heading title="Добавить жанр" variant="h3" className={styles.title} />
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
					Создать
				</Button>
			</form>
		</Meta>
	)
}

export default GenreCreate
