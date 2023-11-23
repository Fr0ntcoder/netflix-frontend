import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TActorEditInput } from 'service/actor/actor.types'

import AdminNavigation from '@/ui/Admin/AdminNavigation/AdminNavigation'
import Button from '@/ui/Buttons/Button/Button'
import InputField from '@/ui/FormElements/InputField/InputField'
import SlugField from '@/ui/FormElements/SlugField/SlugField'
import UploadField from '@/ui/FormElements/UploadField/UploadField'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { useActorEdit } from '@/hooks/actors/actor/useActorEdit'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './ActorEdit.module.scss'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<TActorEditInput>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useActorEdit(setValue)
	return (
		<Meta title="Администратор - редактирование актёра" description="">
			<AdminNavigation />
			<Heading
				title="Редактирование Актёра"
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
					<SlugField
						register={register}
						error={errors.slug}
						generate={() => {
							setValue('slug', generateSlug(getValues('name')))
						}}
					/>
				</div>
				<div className={styles.bottom}>
					<Controller
						control={control}
						name="photo"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder="actors"
								placeholder="Фото"
							/>
						)}
						rules={{
							required: 'Загрузите фото',
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

export default ActorEdit
