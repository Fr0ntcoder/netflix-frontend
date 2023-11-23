import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TMovieEditInput } from 'service/movie/movie.types'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import InputField from '@/components/ui/form-elements/input-field/InputField'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useAdminActor } from '@/hooks/actors/useAdminActor'
import { useAdminGenre } from '@/hooks/genres/useAdminGenre'
import { useMovieCreate } from '@/hooks/movies/movie/useMovieCreate'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './MovieCreate.module.scss'

const DynamicSelect = dynamic(
	() => import('@/components/ui/form-elements/select/Select'),
	{ ssr: false }
)
const MovieCreate: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<TMovieEditInput>({ mode: 'onChange' })

	const { onSubmit } = useMovieCreate()
	const { data: actors, isLoading: isActorsLoading } = useAdminActor()
	const { data: genres, isLoading: isGenresLoading } = useAdminGenre()
	return (
		<Meta title='Администратор - добавление фильма' description=''>
			<AdminNavigation />
			<Heading title='Добавить фильм' variant='h3' className={styles.title} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.top}>
					<InputField
						placeholder='Название'
						{...register('title', {
							required: 'Введите название'
						})}
						error={errors.title}
						className={styles.input}
					/>
					<SlugField
						register={register}
						error={errors.slug}
						generate={() => {
							setValue('slug', generateSlug(getValues('title')))
						}}
					/>
				</div>
				<div className={styles.middle}>
					<InputField
						placeholder='Страна'
						{...register('parameters.country', {
							required: 'Введите страну'
						})}
						error={errors.parameters?.country}
						className={styles.input}
					/>
					<InputField
						placeholder='Продолжительность(мин)'
						{...register('parameters.duration', {
							required: 'Введите время в мин'
						})}
						error={errors.parameters?.duration}
						className={styles.input}
					/>
					<InputField
						placeholder='Год производства'
						{...register('parameters.year', {
							required: 'Введите год'
						})}
						error={errors.parameters?.year}
						className={styles.input}
					/>
				</div>
				<div className={styles.bottom}>
					<Controller
						control={control}
						name='genres'
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								field={field}
								options={genres || []}
								isLoading={isGenresLoading}
								isMulti
								placeholder='Жанры'
								error={error}
							/>
						)}
						rules={{
							required: 'Выберите жанр'
						}}
					/>
					<Controller
						control={control}
						name='actors'
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								field={field}
								options={actors || []}
								isLoading={isGenresLoading}
								isMulti
								placeholder='Актёры'
								error={error}
							/>
						)}
						rules={{
							required: 'Выберите актёров'
						}}
					/>
				</div>
				<div className={styles.file}>
					<Controller
						control={control}
						name='poster'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder='movies'
								placeholder='Постер'
							/>
						)}
						rules={{
							required: 'Загрузите фото'
						}}
					/>
					<Controller
						control={control}
						name='bigPoster'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder='movies'
								placeholder='Большой постер'
							/>
						)}
						rules={{
							required: 'Загрузите фото'
						}}
					/>
					<Controller
						control={control}
						name='videoUrl'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder='movies'
								placeholder='Видео'
								isNoImage
							/>
						)}
						rules={{
							required: 'Загрузите видео'
						}}
					/>
				</div>
				<Button variant='red' className={styles.btn}>
					Создать
				</Button>
			</form>
		</Meta>
	)
}

export default MovieCreate
