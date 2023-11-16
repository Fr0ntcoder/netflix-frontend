import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TGenreEditInput } from 'service/genre/genre.types'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import InputField from '@/components/ui/form-elements/input-field/InputField'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useGenreEdit } from '@/hooks/genre/useGenreEdit'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './GenreEdit.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/text-editor/TextEditor'),
	{ ssr: false }
)
const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<TGenreEditInput>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Meta title='Администратор - редактирование жанра' description=''>
			<AdminNavigation />
			<Heading
				title='Редактирование жанра'
				variant='h3'
				className={styles.title}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
						name='description'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<DynamicTextEditor
								onChange={onChange}
								value={value}
								error={error}
								placeholder='Описание'
							/>
						)}
						rules={{
							validate: {
								required: v =>
									(v && stripHtml(v).result.length > 0) || 'Введите описание'
							}
						}}
					/>
				</div>
				<Button variant='red' className={styles.btn}>
					Обновить
				</Button>
			</form>
		</Meta>
	)
}

export default GenreEdit
