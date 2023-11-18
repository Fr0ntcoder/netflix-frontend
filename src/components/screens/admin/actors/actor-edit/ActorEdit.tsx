import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TActorEditInput } from 'service/actors/actor.types'

import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import InputField from '@/components/ui/form-elements/input-field/InputField'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useActorEdit } from '@/hooks/actors/actor/useActorEdit'

import { generateSlug } from '@/utils/string/generate-slug'

import styles from './ActorEdit.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/text-editor/TextEditor'),
	{ ssr: false }
)

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<TActorEditInput>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useActorEdit(setValue)
	return (
		<Meta title='Администратор - редактирование актёра' description=''>
			<AdminNavigation />
			<Heading
				title='Редактирование Актёра'
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
						name='photo'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								value={value}
								error={error}
								folder='actors'
								placeholder='Фото'
							/>
						)}
						rules={{
							required: 'Загрузите фото'
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

export default ActorEdit
