import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TMovieEditInput } from 'service/movie/movie.types'

import AdminNavigation from '@/ui/Admin/AdminNavigation/AdminNavigation'
import Button from '@/ui/Buttons/Button/Button'
import InputField from '@/ui/FormElements/InputField/InputField'
import SlugField from '@/ui/FormElements/SlugField/SlugField'
import UploadField from '@/ui/FormElements/UploadField/UploadField'
import Meta from '@/ui/Meta/Meta'
import Heading from '@/ui/heading/Heading'

import { useAdminActor } from '@/hooks/actors/useAdminActor'
import { useAdminGenre } from '@/hooks/genres/useAdminGenre'
import { useMovieEdit } from '@/hooks/movies/movie/useMovieEdit'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './MovieEdit.module.scss'

const DynamicSelect = dynamic(() => import('@/ui/FormElements/Select/Select'), {
	ssr: false,
})
const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<TMovieEditInput>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useMovieEdit(setValue)
	const { data: actors, isLoading: isActorsLoading } = useAdminActor()
	const { data: genres, isLoading: isGenresLoading } = useAdminGenre()

	return (
		<Meta title="Администратор - редактирование фильма" description="">
			<AdminNavigation />
			<Heading
				title="Редактирование фильма"
				variant="h3"
				className={styles.title}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.top}>
					<InputField
						placeholder="Название"
						{...register('title', {
							required: 'Введите название',
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
						placeholder="Страна"
						{...register('parameters.country', {
							required: 'Введите страну',
						})}
						error={errors.parameters?.country}
						className={styles.input}
					/>
					<InputField
						placeholder="Продолжительность(мин)"
						{...register('parameters.duration', {
							required: 'Введите время в мин',
						})}
						error={errors.parameters?.duration}
						className={styles.input}
					/>
					<InputField
						placeholder="Год производства"
						{...register('parameters.year', {
							required: 'Введите год',
						})}
						error={errors.parameters?.year}
						className={styles.input}
					/>
				</div>
				<div className={styles.bottom}>
					<Controller
						control={control}
						name="genres"
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								field={field}
								options={genres || []}
								isLoading={isGenresLoading}
								isMulti
								placeholder="Жанры"
								error={error}
							/>
						)}
						rules={{
							required: 'Выберите жанр',
						}}
					/>
					<Controller
						control={control}
						name="actors"
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								field={field}
								options={actors || []}
								isLoading={isGenresLoading}
								isMulti
								placeholder="Актёры"
								error={error}
							/>
						)}
						rules={{
							required: 'Выберите актёров',
						}}
					/>
				</div>
				<div className={styles.file}>
					<Controller
						control={control}
						name="poster"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder="movies"
								placeholder="Постер"
							/>
						)}
						rules={{
							required: 'Загрузите фото',
						}}
					/>
					<Controller
						control={control}
						name="bigPoster"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder="movies"
								placeholder="Большой постер"
							/>
						)}
						rules={{
							required: 'Загрузите фото',
						}}
					/>
					<Controller
						control={control}
						name="videoUrl"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder="movies"
								placeholder="Видео"
								isNoImage
							/>
						)}
						rules={{
							required: 'Загрузите видео',
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

export default MovieEdit
