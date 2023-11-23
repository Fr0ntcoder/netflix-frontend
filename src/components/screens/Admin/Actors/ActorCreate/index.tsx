import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TActorEditInput } from 'service/actor/actor.types'

import AdminNavigation from '@/ui/Admin/AdminNavigation'
import Button from '@/ui/Buttons/Button'
import InputField from '@/ui/FormElements/InputField'
import SlugField from '@/ui/FormElements/SlugField'
import UploadField from '@/ui/FormElements/UploadField'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

import { useActorCreate } from '@/hooks/actors/actor/useActorCreate'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './ActorCreate.module.scss'

const ActorCreate: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<TActorEditInput>({ mode: 'onChange' })

	const { onSubmit } = useActorCreate()

	return (
		<Meta title="Администратор - добавить актёра" description="">
			<AdminNavigation />
			<Heading title="Добавить актёра" variant="h3" className={styles.title} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.top}>
					<InputField
						placeholder="Имя"
						{...register('name', {
							required: 'Имя обязательно',
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
				<div className={styles.editor}>
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
					Создать
				</Button>
			</form>
		</Meta>
	)
}

export default ActorCreate
